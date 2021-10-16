module.exports = {
  async redirects() {
    const redirectSapperToNextJSPaths = [
      'cimb',
      'scb',
      'dbs',
      'citibank',
      'posb',
      'hsbc',
      'maybank',
      'ocbc',
      'uob',
      'lazada',
      'carousell',
      'grab',
      'qoo10',
      'shopee',
      'zalora',
      'ezbuy'
    ].map(pth => ({
      source: `/${pth}`,
      destination: `/dpo/${pth}`,
      permanent: true
    }))

    return redirectSapperToNextJSPaths.concat([
      {
        source: '/dpo/posb',
        destination: '/dpo/dbs',
        permanent: true
      },
      {
        source: '/dpo/silkair',
        destination: '/dpo/singapore-airlines',
        permanent: true
      },
      {
        source: '/dpo/youtube',
        destination: '/dpo/google',
        permanent: true
      }
    ])
  },
}