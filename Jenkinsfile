pipeline {
    agent any
    
   environment {
    
    PROJECT_NAME = 'tieup-frontend'
    DEPLOY_PATH = "/var/www/html/${PROJECT_NAME}"
}


    tools {
        nodejs "Node 18"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                // This runs lint but ignores warnings, you can remove `|| true` to enforce it
                sh 'npm run lint || true'
            }
        }

        stage('Build') {
            steps {
                sh 'CI=false npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Ensure the deployment path exists
                sh "mkdir -p ${DEPLOY_PATH}" // Create the directory if not exists
                // Deploy the build files
                sh 'rsync -avz --delete dist/ ${DEPLOY_PATH}/'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Build or deployment failed!'
        }
    }
}
