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
                        echo 'GIT_PREVIOUS_SUCCESSFUL_COMMIT ${env.GIT_PREVIOUS_SUCCESSFUL_COMMIT}'
                        def base = env.GIT_PREVIOUS_SUCCESSFUL_COMMIT?.trim()
                        sh 'npx lerna run build --since=${base}'
                    }
                }
            }
        }
    }
}