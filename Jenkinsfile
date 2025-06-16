pipeline {
    agent any
    environment {
        BACKEND_URL = 'https://api.render.com/deploy/srv-d187lrqdbo4c73ddmf5g?key=mDza22PME6U'
        FRONTEND_HOOK = 'https://api.netlify.com/build_hooks/68509e8202c3193c5d1d0f18'
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sujal-maheshwari2004/ResumeAnalyzer.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t resume-backend .'
            }
        }
        stage('Deploy to Render') {
            steps {
                sh """
                curl -X POST $BACKEND_URL
                """
            }
        }
        stage('Trigger Netlify Build') {
            steps {
                sh """
                curl -X POST $FRONTEND_HOOK
                """
            }
        }
    }
}
