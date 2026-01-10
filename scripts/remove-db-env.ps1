$val = (Get-ItemProperty -Path 'HKCU:\Environment' -Name 'DATABASE_URL' -ErrorAction SilentlyContinue).DATABASE_URL
if ($val) {
  Write-Host "Found HKCU value: $val"
  Remove-ItemProperty -Path 'HKCU:\Environment' -Name 'DATABASE_URL'
  Write-Host "Removed HKCU DATABASE_URL"
} else {
  Write-Host "No HKCU DATABASE_URL"
}

# Clear current session env var
Remove-Item Env:DATABASE_URL -ErrorAction SilentlyContinue

Write-Host '--- After deletion ---'
Write-Host 'Process:'
Write-Host ([Environment]::GetEnvironmentVariable('DATABASE_URL','Process'))
Write-Host 'User:'
Write-Host ([Environment]::GetEnvironmentVariable('DATABASE_URL','User'))
Write-Host 'Machine:'
Write-Host ([Environment]::GetEnvironmentVariable('DATABASE_URL','Machine'))

Write-Host '--- Running node test-connexion.js ---'
node test-connexion.js
