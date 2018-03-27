module.exports = `
  yarn tpl | npm run tpl <type> <name> <...>

  Args : 

  - type : reducer | component
  - name : Name of the component


  For components : 

  - path : Path of the component in src/components


  Examples : 

  # Create loginReducer file in src/components/reducers
  yarn tpl reducer login

  # Create footer component in src/components/footer 
  yarn tpl component footer footer
`;