pipeline {
    agent any

    environment {
        RENDER_HOOK = 'https://api.render.com/deploy/srv-d187lrqdbo4c73ddmf5g?key=mDza22PME6U'
        NETLIFY_HOOK = 'https://api.netlify.com/build_hooks/68509e8202c3193c5d1d0f18'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t resume-backend ./backend'
                sh 'docker build -t resume-frontend ./frontend'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'curl -X POST $RENDER_HOOK'
            }
        }

        stage('Trigger Netlify Build') {
            steps {
                sh 'curl -X POST $NETLIFY_HOOK'
            }
        }
    }
}
