!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){document.getElementById("menu").classList.contains("hidden")?document.getElementById("menu").classList.remove("hidden"):document.getElementById("menu").classList.add("hidden")}function a(){const e=document.getElementById("add-project-btn"),t=document.getElementById("add-project-form");e.classList.contains("hidden")?(e.classList.remove("hidden"),t.classList.add("hidden"),document.getElementById("new-project-name").value=""):(e.classList.add("hidden"),t.classList.remove("hidden"))}function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function o(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function u(e){i(1,arguments);var t=o(e);return t.setHours(0,0,0,0),t}function s(e,t){i(2,arguments);var n=u(e),r=u(t);return n.getTime()===r.getTime()}function c(e){return i(1,arguments),s(e,Date.now())}n.r(t);function d(e){return e.getTime()%6e4}function l(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+d(t))%6e4:d(t))}function m(e,t){i(2,arguments);var n=u(e),r=u(t),a=n.getTime()-l(n),o=r.getTime()-l(r);return Math.round((a-o)/864e5)}function f(e){i(1,arguments);var t=o(e);return!isNaN(t)}var h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function g(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var w={date:g({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:g({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:g({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function b(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(d)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(d,(function(e){return e.test(c)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(d,(function(e){return e.test(c)})),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}var p,T={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof h[e]?h[e]:1===t?h[e].one:h[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:w,formatRelative:function(e,t,n,r){return v[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(p.matchPattern);if(!a)return null;var i=a[0],o=n.match(p.parsePattern);if(!o)return null;var u=p.valueCallback?p.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function M(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function E(e,t){i(2,arguments);var n=o(e).getTime(),r=M(t);return new Date(n+r)}function C(e,t){i(2,arguments);var n=M(t);return E(e,-n)}function k(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var D={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return k("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):k(n+1,2)},d:function(e,t){return k(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.toUpperCase();case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return k(e.getUTCHours()%12||12,t.length)},H:function(e,t){return k(e.getUTCHours(),t.length)},m:function(e,t){return k(e.getUTCMinutes(),t.length)},s:function(e,t){return k(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds();return k(Math.floor(r*Math.pow(10,n-3)),t.length)}};function x(e){i(1,arguments);var t=1,n=o(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function P(e){i(1,arguments);var t=o(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=x(r),u=new Date(0);u.setUTCFullYear(n,0,4),u.setUTCHours(0,0,0,0);var s=x(u);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function L(e){i(1,arguments);var t=P(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=x(n);return r}function S(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,u=null==a?0:M(a),s=null==n.weekStartsOn?u:M(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=o(e),d=c.getUTCDay(),l=(d<s?7:0)+d-s;return c.setUTCDate(c.getUTCDate()-l),c.setUTCHours(0,0,0,0),c}function U(e,t){i(1,arguments);var n=o(e,t),r=n.getUTCFullYear(),a=t||{},u=a.locale,s=u&&u.options&&u.options.firstWeekContainsDate,c=null==s?1:M(s),d=null==a.firstWeekContainsDate?c:M(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(r+1,0,d),l.setUTCHours(0,0,0,0);var m=S(l,t),f=new Date(0);f.setUTCFullYear(r,0,d),f.setUTCHours(0,0,0,0);var h=S(f,t);return n.getTime()>=m.getTime()?r+1:n.getTime()>=h.getTime()?r:r-1}function B(e,t){i(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,o=null==a?1:M(a),u=null==n.firstWeekContainsDate?o:M(n.firstWeekContainsDate),s=U(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var d=S(c,t);return d}var W="midnight",j="noon",O="morning",N="afternoon",Y="evening",I="night";function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+k(i,2)}function H(e,t){return e%60==0?(e>0?"-":"+")+k(Math.abs(e)/60,2):z(e,t)}function z(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+k(Math.floor(a/60),2)+n+k(a%60,2)}var X={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return D.y(e,t)},Y:function(e,t,n,r){var a=U(e,r),i=a>0?a:1-a;return"YY"===t?k(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):k(i,t.length)},R:function(e,t){return k(P(e),t.length)},u:function(e,t){return k(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return k(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return k(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return D.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return k(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){i(1,arguments);var n=o(e),r=S(n,t).getTime()-B(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):k(a,t.length)},I:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=x(t).getTime()-L(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):k(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):D.d(e,t)},D:function(e,t,n){var r=function(e){i(1,arguments);var t=o(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):k(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return k(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return k(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return k(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?j:0===a?W:a/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?Y:a>=12?N:a>=4?O:I,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return D.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):D.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):k(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):D.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):D.s(e,t)},S:function(e,t){return D.S(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return H(a);case"XXXX":case"XX":return z(a);case"XXXXX":case"XXX":default:return z(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return H(a);case"xxxx":case"xx":return z(a);case"xxxxx":case"xxx":default:return z(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");case"OOOO":default:return"GMT"+z(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");case"zzzz":default:return"GMT"+z(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return k(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return k((r._originalDate||e).getTime(),t.length)}};function A(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function F(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var Q={p:F,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return A(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",A(a,t)).replace("{{time}}",F(i,t))}},G=["D","DD"],R=["YY","YYYY"];function _(e){return-1!==G.indexOf(e)}function J(e){return-1!==R.indexOf(e)}function V(e){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` for formatting years; see: https://git.io/fxCyr");if("YY"===e)throw new RangeError("Use `yy` instead of `YY` for formatting years; see: https://git.io/fxCyr");if("D"===e)throw new RangeError("Use `d` instead of `D` for formatting days of the month; see: https://git.io/fxCyr");if("DD"===e)throw new RangeError("Use `dd` instead of `DD` for formatting days of the month; see: https://git.io/fxCyr")}var $=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,K=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e,t,n){i(2,arguments);var r=String(t),a=n||{},u=a.locale||T,s=u.options&&u.options.firstWeekContainsDate,c=null==s?1:M(s),d=null==a.firstWeekContainsDate?c:M(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=u.options&&u.options.weekStartsOn,h=null==m?0:M(m),g=null==a.weekStartsOn?h:M(a.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!u.localize)throw new RangeError("locale must contain localize property");if(!u.formatLong)throw new RangeError("locale must contain formatLong property");var w=o(e);if(!f(w))throw new RangeError("Invalid time value");var v=l(w),y=C(w,v),b={firstWeekContainsDate:d,weekStartsOn:g,locale:u,_originalDate:w},p=r.match(K).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Q[t])(e,u.formatLong,b):e})).join("").match($).map((function(e){if("''"===e)return"'";var t=e[0];if("'"===t)return re(e);var n=X[t];if(n)return!a.useAdditionalWeekYearTokens&&J(e)&&V(e),!a.useAdditionalDayOfYearTokens&&_(e)&&V(e),n(y,e,u.localize,b);if(t.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return e})).join("");return p}function re(e){return e.match(Z)[1].replace(ee,"'")}function ae(e){var t=new Array,n="All Tasks";function r(e){t.push(e),t.sort((e,t)=>e.getDate()>t.getDate()?1:-1)}function a(){if(e.innerHTML="","All Tasks"===n)for(let n=0;n<t.length;n++)e.appendChild(t[n].getDomElement());else if("Today"===n)for(let n=0;n<t.length;n++)c(new Date(t[n].getDate()))&&e.appendChild(t[n].getDomElement());else if("Next 7 Days"===n)for(let n=0;n<t.length;n++)m(new Date(t[n].getDate()),new Date)<7&&e.appendChild(t[n].getDomElement());else for(let r=0;r<t.length;r++)t[r].getProject()===n&&e.appendChild(t[r].getDomElement())}function i(e){for(let n=0;n<t.length;n++)t[n].deleteBtn===e.target&&t.splice(n,1);a()}return{addItem:r,getList:function(){return t},displayList:a,createNewTask:function(e,t,n){const a=function(e,t="",n,r=" "){var a=e,i=n,o=r,u=!1;const s=function(){const e=document.createElement("input");return e.type="image",e.src="./assets/remove.svg",e.classList.add("button"),e.classList.add("button-icon"),e.classList.add("task-buttons"),e}();var c=function(){const e=document.createElement("div");e.classList+="todo-task";const t=document.createElement("button");t.classList.add("check-button"),t.addEventListener("click",l);const n=document.createElement("p");n.innerText=a,n.classList.add("task-title");const r=document.createElement("p");r.innerText=o,r.classList.add("task-project");const u=document.createElement("p");return u.innerText=function(){if(!i)return"";return ne(new Date(d()),"MMMM do")}(),u.classList.add("task-date"),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(u),e.appendChild(s),e}();function d(){return i}function l(e){u?(u=!1,c.classList.remove("checked"),e.target.innerHTML=""):(u=!0,c.classList.add("checked"),e.target.innerHTML="&#10003;")}return{getDate:d,getName:function(){return name},getProject:function(){return o},getDomElement:function(){return c},toggleCheckedState:l,deleteBtn:s}}(e,"",t,n);a.deleteBtn.addEventListener("click",i),r(a)},setActiveProject:function(e){n=e}}}function ie(){const e=document.getElementById("add-task-btn"),t=document.getElementById("new-task-form");e.classList.contains("hidden")?(e.classList.remove("hidden"),t.classList.add("hidden"),document.getElementById("new-task-title").value="",document.getElementById("new-task-date").value="",document.getElementById("new-task-project").value=""):(e.classList.add("hidden"),t.classList.remove("hidden"))}!function(){c();const e=new ae(document.getElementById("todo-list")),t=function(){var e=new Array;return{addProject:function(t){e.push(t)},getList:function(){return e},displayList:function(t){for(let n=0;n<e.length;n++)t.appendChild(e[n].getDomElement())}}}();let n="";document.getElementById("date-display").innerText=ne(new Date,"EEEE, MMMM do"),document.getElementById("burger-button").addEventListener("click",r),document.getElementById("add-task-btn").addEventListener("click",ie),document.getElementById("add-project-btn").addEventListener("click",a),document.getElementById("submit-new-task-btn").addEventListener("click",o),document.getElementById("new-task-form").addEventListener("keyup",e=>{13===e.keyCode&&o()}),document.getElementById("submit-new-project-btn").addEventListener("click",u),document.getElementById("add-project-form").addEventListener("keyup",e=>{13===e.keyCode&&u()}),document.addEventListener("click",(function(e){if(document.documentElement.clientWidth>700)return;let t=e.target;console.log(t.id);const n=document.getElementById("menu");if(n.classList.contains("hidden")||"burger-button"==t.id||t.classList.contains("burger"))return;do{if(t==n)return;t=t.parentNode}while(t);r()}));const i=document.getElementsByClassName("list-select");for(let e=0;e<i.length;e++)i[e].addEventListener("click",s);function o(){var t=document.getElementById("new-task-title").value,r=document.getElementById("new-task-date").value,a=document.getElementById("new-task-project").value;t&&(e.createNewTask(t,r,a),e.displayList(n),ie())}function u(){var e=document.getElementById("new-project-name").value;document.getElementById("project-select");if(!e)return;const n=function(e){var t=e,n=function(){const e=document.createElement("li");return e.innerText=t,e.classList.add("button"),e.classList.add("list-select"),e}();return{getName:function(){return t},getDomElement:function(){return n}}}(e);n.getDomElement().addEventListener("click",s),t.addProject(n),t.displayList(document.getElementById("projects-list")),document.getElementById("new-task-project").innerHTML+=`<option>${e}</option>`,a()}function s(t){const r=document.getElementsByClassName("list-select");for(let e=0;e<r.length;e++)r[e].classList.contains("active")&&r[e].classList.remove("active");t.target.classList.add("active"),document.getElementById("task-list-name").innerText=t.target.innerText,n=t.target.innerText,e.setActiveProject(n),e.displayList(),c()}function c(){document.documentElement.clientWidth<700&&r()}}()}]);