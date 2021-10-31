pipeline {
    agent any
    triggers {
        githubPush()
    }
      stages {
          stage('build') {
              steps {
                  echo 'building the software'
                  sh 'npm install'
              }
          }

        stage('test') {
              steps {
                  echo 'testing the software'
                  sh 'npm test'
              }
          }
          stage('coverage') {
              steps {
                  echo 'checking the code coverage'
                  sh 'npm run coverage'
              }
          }
    }
}