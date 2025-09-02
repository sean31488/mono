pipeline{
    agent any

    stages{
        stage("install"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    sh 'npm i -g pnpm@latest-10'
                    sh 'pnpm install'
					sh 'npx lerna run build --since=origin/master'
				}
            }
        }
    }
}