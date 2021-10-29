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
    }
}