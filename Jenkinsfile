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
          stage('deploy') {
              steps {
                  echo 'deploying the software to aws ec2'
                  sh '''#!/bin/bash
                  ssh ubuntu@ip-172.31.90.59 <<EOF
                   cd /var/www/git-peoject
                   sudo git reset --hard HEAD
                   sudo git pull
                   npm install
                   pm2 restart all
                   exit
                  EOF
                  '''
          }
      }
    }
}