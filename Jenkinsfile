pipeline {
    agent any

    tools {
      nodejs "NodeJS"
    }

    stages {
      stage('Clone Repository') {
        steps {
          git branch: 'main', url: 'https://github.com/PongKaiser/users-js-testing.git'
        }
      }

      stage('Install Dependencies') {
        steps {
          sh 'npm install'
        }
      }

      stage('Run Tests') {
        steps {
          sh 'npm test'
        }
      }

      stage('Build') {
        steps {
          sh 'npm run build'
        }
      }

      stage('Start a service'){
        steps {
          sh """
            export JENKINS_NODE_COOKIE=dontKillMe;
            npm install -g serve
            pm2 start "serve -s build" --name "todo-backend"
          """
        }
      }
    }

    post {
      success {
        echo 'Build succeeded!'
      }
      failure {
        echo 'Build failed!'
      }
    }
}