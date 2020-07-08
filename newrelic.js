'use strict'

exports.config = {
  app_name: ['My App'],
  license_key: '6d426d79f15b9f72581565d05d7e5abe3a1bNRAL',
  logging: {
    level: 'trace',
    filepath: '../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: false,
    detect_pcf: false,
    detect_azure: false,
    detect_gcp: false,
    detect_docker: false
  },
  transaction_tracer: {
    enabled: true
  }
}
