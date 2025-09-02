pipeline{
    agent any

    stages{
        stage("install"){
            steps{
                nodejs(nodeJSInstallationName: 'v22') {
                    sh 'npm i pnpm@latest-10'
                    sh 'pnpm install'
                }
            }
        }
    }
}