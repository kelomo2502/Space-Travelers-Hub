
pipeline {
    agent any

    environment {
        IMAGE_NAME = "spaceapp"
        CONTAINER_NAME = "spaceapp_container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'development', url: 'https://github.com/kelomo2502/Space-Travelers-Hub.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $IMAGE_NAME ./space-travellerHub'
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                    docker run -d -p 8081:80 --name $CONTAINER_NAME --restart always $IMAGE_NAME
                    '''
                }
            }
        }
    }
}
