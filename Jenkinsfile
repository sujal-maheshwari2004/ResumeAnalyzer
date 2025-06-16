pipeline {
    agent any

    environment {
        RENDER_DEPLOY_HOOK = 'https://api.render.com/deploy/srv-d187lrqdbo4c73ddmf5g?key=mDza22PME6U'
        NETLIFY_BUILD_HOOK = 'https://api.netlify.com/build_hooks/68509e8202c3193c5d1d0f18'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def backendImage = docker.build('resume-analyzer-backend', './backend')
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                echo 'Triggering backend deploy to Render'
                sh "curl -X GET $RENDER_DEPLOY_HOOK"
            }
        }

        stage('Trigger Netlify Build') {
            steps {
                echo 'Triggering frontend build on Netlify'
                sh "curl -X POST $NETLIFY_BUILD_HOOK"
            }
        }
    }
}
