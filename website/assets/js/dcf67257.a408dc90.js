"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5614],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5366:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={id:"exempt-namespaces",title:"Exempting Namespaces"},c=void 0,p={unversionedId:"exempt-namespaces",id:"version-v3.7.x/exempt-namespaces",title:"Exempting Namespaces",description:"Exempting Namespaces from Gatekeeper using config resource",source:"@site/versioned_docs/version-v3.7.x/exempt-namespaces.md",sourceDirName:".",slug:"/exempt-namespaces",permalink:"/gatekeeper/website/docs/v3.7.x/exempt-namespaces",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.7.x/exempt-namespaces.md",tags:[],version:"v3.7.x",frontMatter:{id:"exempt-namespaces",title:"Exempting Namespaces"},sidebar:"version-v3.7.x/docs",previous:{title:"Replicating Data",permalink:"/gatekeeper/website/docs/v3.7.x/sync"},next:{title:"Policy Library",permalink:"/gatekeeper/website/docs/v3.7.x/library"}},l={},m=[{value:"Exempting Namespaces from Gatekeeper using config resource",id:"exempting-namespaces-from-gatekeeper-using-config-resource",level:2},{value:"Exempting Namespaces from the Gatekeeper Admission Webhook using <code>--exempt-namespace</code> flag",id:"exempting-namespaces-from-the-gatekeeper-admission-webhook-using---exempt-namespace-flag",level:2},{value:"Difference between exclusion using config resource and <code>--exempt-namespace</code> flag",id:"difference-between-exclusion-using-config-resource-and---exempt-namespace-flag",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"exempting-namespaces-from-gatekeeper-using-config-resource"},"Exempting Namespaces from Gatekeeper using config resource"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'The "Config" resource must be named ',(0,o.kt)("inlineCode",{parentName:"p"},"config")," for it to be reconciled by Gatekeeper. Gatekeeper will ignore the resource if you do not name it ",(0,o.kt)("inlineCode",{parentName:"p"},"config"),".")),(0,o.kt)("p",null,"The config resource can be used as follows to exclude namespaces from certain processes for all constraints in the cluster. An asterisk can be used for wildcard matching (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-*"),"). To exclude namespaces at a constraint level, use ",(0,o.kt)("inlineCode",{parentName:"p"},"excludedNamespaces")," in the ",(0,o.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.7.x/howto#constraints"},"constraint")," instead."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: "gatekeeper-system"\nspec:\n  match:\n    - excludedNamespaces: ["kube-*", "my-namespace"]\n      processes: ["*"]\n    - excludedNamespaces: ["audit-excluded-ns"]\n      processes: ["audit"]\n    - excludedNamespaces: ["audit-webhook-sync-excluded-ns"]\n      processes: ["audit", "webhook", "sync"]\n    - excludedNamespaces: ["mutation-excluded-ns"]\n      processes: ["mutation-webhook"]\n...\n')),(0,o.kt)("p",null,"Available processes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"audit")," process exclusion will exclude resources from specified namespace(s) in audit results."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"webhook")," process exclusion will exclude resources from specified namespace(s) from the admission webhook."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sync")," process exclusion will exclude resources from specified namespace(s) from being synced into OPA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mutation-webhook")," process exclusion will exclude resources from specified namespace(s) from the mutation webhook."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"*")," includes all current processes above and includes any future processes.")),(0,o.kt)("h2",{id:"exempting-namespaces-from-the-gatekeeper-admission-webhook-using---exempt-namespace-flag"},"Exempting Namespaces from the Gatekeeper Admission Webhook using ",(0,o.kt)("inlineCode",{parentName:"h2"},"--exempt-namespace")," flag"),(0,o.kt)("p",null,"Note that the following only exempts resources from the admission webhook. They will still be audited. Editing individual constraints or ",(0,o.kt)("a",{parentName:"p",href:"#exempting-namespaces-from-gatekeeper-using-config-resource"},"config resource")," is\nnecessary to exclude them from audit."),(0,o.kt)("p",null,"If it becomes necessary to exempt a namespace from Gatekeeper webhook entirely (e.g. you want ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," to bypass admission checks), here's how to do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure the validating admission webhook configuration for Gatekeeper has the following namespace selector:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  namespaceSelector:\n    matchExpressions:\n    - key: admission.gatekeeper.sh/ignore\n      operator: DoesNotExist\n")),(0,o.kt)("p",{parentName:"li"},"the default Gatekeeper manifest should already have added this. The default name for the\nwebhook configuration is ",(0,o.kt)("inlineCode",{parentName:"p"},"gatekeeper-validating-webhook-configuration")," and the default\nname for the webhook that needs the namespace selector is ",(0,o.kt)("inlineCode",{parentName:"p"},"validation.gatekeeper.sh"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Tell Gatekeeper it's okay for the namespace to be ignored by adding a flag to the pod:\n",(0,o.kt)("inlineCode",{parentName:"p"},"--exempt-namespace=<NAMESPACE NAME>"),". This step is necessary because otherwise the\npermission to modify a namespace would be equivalent to the permission to exempt everything\nin that namespace from policy checks. This way a user must explicitly have permissions\nto configure the Gatekeeper pod before they can add exemptions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"admission.gatekeeper.sh/ignore")," label to the namespace. The value attached\nto the label is ignored, so it can be used to annotate the reason for the exemption."))),(0,o.kt)("h2",{id:"difference-between-exclusion-using-config-resource-and---exempt-namespace-flag"},"Difference between exclusion using config resource and ",(0,o.kt)("inlineCode",{parentName:"h2"},"--exempt-namespace")," flag"),(0,o.kt)("p",null,"The difference is at what point in the admission process an exemption occurs."),(0,o.kt)("p",null,"If you use ",(0,o.kt)("inlineCode",{parentName:"p"},"--exempt-namespace")," flag and ",(0,o.kt)("inlineCode",{parentName:"p"},"admission.gatekeeper.sh/ignore")," label, Gatekeeper's webhook will not be called by the API server for any resource in that namespace. That means that Gatekeeper being down should have no effect on requests for that namespace."),(0,o.kt)("p",null,"If you use the config method, Gatekeeper itself evaluates the exemption. The benefit there is that we have more control over the syntax and can be more fine-grained, but it also means that the API server is still calling the webhook, which means downtime can have an impact."))}d.isMDXComponent=!0}}]);