import groovy.json.*

pipeline{
    agent any

    options { ansiColor('xterm') }

    stages{
        stage("install"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    sh 'npm i -g pnpm@latest-10'
                    sh 'pnpm install'
				}
            }
        }
        stage("build"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    script{
                        env.GIT_BASE = env.GIT_PREVIOUS_SUCCESSFUL_COMMIT?.trim()
                        echo "GIT_PREVIOUS_SUCCESSFUL_COMMIT: ${env.GIT_BASE}"

                        if (!env.GIT_BASE) {
                            echo "GIT_PREVIOUS_SUCCESSFUL_COMMIT not found, using HEAD^"
                            env.GIT_BASE = sh(script: "git rev-parse HEAD^", returnStdout: true).trim()
                            echo "git rev-parse HEAD^: ${env.GIT_BASE}"
                        }

                        // TODO: test
                        env.GIT_BASE = '324829927c500d828313d483ba31c1504b866446'
                        
                        sh "npx lerna run build --since=${env.GIT_BASE}"
                    }
                }
            }
        }
        stage("upload"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    script{
                        def ls = sh( 
                            script: "npx lerna ls -a --since=${env.GIT_BASE} --json --loglevel=silent",
                            returnStdout: true
                        ).trim()

                        echo "Lerna ls output: ${ls}"

                        def changed = new JsonSlurper().parseText(ls).collect{pkg -> new HashMap(pkg)}
                        echo "Changed packages: ${changed}"
                        echo "Changed type: ${changed.getClass()}"


                        changed.each {pkg ->
                            echo "pkg.location: ${pkg.location}"
                            dir(pkg.location) {
                                echo "change dir to ${pkg.location}"
                                def pwd = sh(script: 'pwd', returnStdout: true).trim()
                                echo "pwd: ${pwd}"

                                // TODO: 讀取.env的S3_DIR，並echo
                                def props = readProperties file: '.env'
                                echo "S3_DIR from .env: ${props.S3_DIR}"
                            }
                        }
                    }
                }
            }
        }
    }
}