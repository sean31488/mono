pipeline{
    agent any

    stages{
        stage("install"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    sh 'npm i -g pnpm@latest-10'
                    sh 'pnpm install'
                    echo 'GIT_PREVIOUS_SUCCESSFUL_COMMIT'
                    echo env.GIT_PREVIOUS_SUCCESSFUL_COMMIT?.trim()
					// sh 'npx lerna run build --since=HEAD^'
				}
            }
        }
    }
}