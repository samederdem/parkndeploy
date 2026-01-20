param location string
param project string
param identifier string

resource swa 'Microsoft.Web/staticSites@2024-04-01' = {
  name: '${project}-swa-${identifier}'
  location: location

  sku: {
    name: 'Standard'
    tier: 'Standard'
  }

  properties: {}
}

output swaName string = swa.name
