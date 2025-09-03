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
                        def base = env.GIT_PREVIOUS_SUCCESSFUL_COMMIT?.trim()
                        echo "GIT_PREVIOUS_SUCCESSFUL_COMMIT: ${base}"

                        if (!base) {
                            echo "GIT_PREVIOUS_SUCCESSFUL_COMMIT not found, using HEAD^"
                            base = sh(script: "git rev-parse HEAD^", returnStdout: true).trim()
                            echo "git rev-parse HEAD^: ${base}"
                        }

                        sh 'npx lerna run build --since=${base}'
                    }
                }
            }
        }
    }
}