import hasRole from './hasRole'
import hasPermi from './hasPermi'

export default function directive(app){
  app.directive('hasRole', hasRole)
  app.directive('hasPermi', hasPermi)
//   app.directive('copyText', copyText)
}