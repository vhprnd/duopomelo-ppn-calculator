"use strict";function t(t,r=0){try{const n=e(t,"numberToBeRounded"),c=e(r,"roundDigit"),i=Math.pow(10,Math.ceil(c));return Math.round((n+Number.EPSILON)*i)/i}catch(t){return t.message}}function e(t,e){if("undefined"===t||"null"===t||"number"!=typeof t||!Number.isFinite(t))throw new Error(`500. Please defined ${e} correctly.`);return t}exports.calculatePrice=function(r,n,c,i){try{const o=e(r,"itemQty"),u=e(n,"itemPrice"),a=e(c,"percentDiscount"),s=e(i,"percentVAT"),d=t(1+s/100,2),p=u-t(u*a/100,2),l=t(u/d,2),m=t(l*a/100,2),_=t((l-m)*s/100,2),f=t(p-(l-m+_),2),h=t(l+f,2),y=t(o*u,2),b=t(h*o,2),g=t(m*o,2);return{item_qty:o,item_price:u,percent_discount:a,percent_vat:s,total_price:y,total_dpp:b,total_discount:g,total_vat:t(_*o,2)}}catch(t){return t.message}},exports.numberRounding=t;