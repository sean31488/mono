pipeline{
    agent any

    options { ansiColor('xterm') }

    stages{
        stage("install"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    sh 'npx -y pnpm install'
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

                        echo "env.GIT_BRANCH: ${env.GIT_BRANCH}"
                        def mode = 'dev'
                        if (env.GIT_BRANCH == 'origin/master'){
                            mode = 'prod'
                        } else if (env.GIT_BRANCH == 'origin/release'){
                            mode = 'stg'
                        }
                        echo "Build mode: ${mode}"

                        // TODO: test
                        // env.GIT_BASE = '324829927c500d828313d483ba31c1504b866446'
                        
                        sh "npx lerna run build --since=${env.GIT_BASE} -- --mode=${mode}"
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

                        def changed = new groovy.json.JsonSlurper().parseText(ls).collect{pkg -> new HashMap(pkg)}
                        echo "Changed packages: ${changed}"

                        changed.each {pkg ->
                            echo "pkg.location: ${pkg.location}"
                            dir(pkg.location) {
                                echo "change dir to ${pkg.location}"

                                def s3Dir = readFile('.env').readLines().find { line -> 
                                    line.startsWith('S3_DIR=') 
                                }?.substring(7)
                                echo "S3_DIR from .env: ${s3Dir}"

                                if (s3Dir){
                                    // 這裡會做s3上傳
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}