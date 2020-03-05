(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{216:function(t,e,a){t.exports=a.p+"assets/img/lsx_gif.31f08b39.gif"},483:function(t,e,a){"use strict";a.r(e);var s=a(7),o=Object(s.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lsx-function-for-organizing-pages-in-a-hierarchy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsx-function-for-organizing-pages-in-a-hierarchy","aria-hidden":"true"}},[t._v("#")]),t._v(" Lsx function for organizing pages in a hierarchy")]),t._v(" "),s("p",[s("img",{attrs:{src:a(216),alt:"lsx"}})]),t._v(" "),s("p",[t._v("GROWI has a function to display a list of created pages.")]),t._v(" "),s("p",[t._v("If you write "),s("code",[t._v("$lsx()")]),t._v(" (dollar sign, lsx and parentheses),\nyou can output a list of pages under the corresponding page.")]),t._v(" "),s("p",[t._v("Useful for screens that manage a large number of pages.")]),t._v(" "),s("h2",{attrs:{id:"output-a-list-of-specified-pages"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-a-list-of-specified-pages","aria-hidden":"true"}},[t._v("#")]),t._v(" Output a list of specified pages")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("If you enter "),s("code",[t._v("$lsx(/user)")]),t._v(", a list of pages under the user page directly\nunder the top page will be output.")])]),t._v(" "),s("li",[s("p",[t._v("If you write "),s("code",[t._v("$lsx (./sample)")]),t._v(", the list of pages\nunder the page "),s("code",[t._v("sample")]),t._v(" under the page being edited will be output.")]),t._v(" "),s("p",[t._v("When a nonexistent page name is specified\nAn error message is output instead of a page list,\nas in "),s("code",[t._v("$lsx(/samplemiss) has no contents")]),t._v(".")])])]),t._v(" "),s("h2",{attrs:{id:"useful-optional-features-of-lxs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#useful-optional-features-of-lxs","aria-hidden":"true"}},[t._v("#")]),t._v(" Useful optional features of lxs")]),t._v(" "),s("p",[t._v("You can set multiple options for lsx as well as page specification.")]),t._v(" "),s("p",[t._v("If you want to use a combination of page specifications and options,\nspecify them as follows, separated by a comma.")]),t._v(" "),s("p",[s("code",[t._v("$lsx(/page, depth=1, sort=createdAt, reverse=true)")])]),t._v(" "),s("ul",[s("li",[t._v("List of lsx options")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Parameters")]),t._v(" "),s("th",[t._v("Default value")]),t._v(" "),s("th",[t._v("Explanation")]),t._v(" "),s("th",[t._v("Details")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("num")]),t._v(" "),s("td",[t._v("not set")]),t._v(" "),s("td",[t._v("Specify the number of output pages.")]),t._v(" "),s("td",[s("a",{attrs:{href:"#num-option"}},[t._v("num option details")])])]),t._v(" "),s("tr",[s("td",[t._v("depth")]),t._v(" "),s("td",[t._v("not set")]),t._v(" "),s("td",[t._v("Specify a hierarchy and output a page list.")]),t._v(" "),s("td",[s("a",{attrs:{href:"#depth-option"}},[t._v("depth option details")])])]),t._v(" "),s("tr",[s("td",[t._v("sort")]),t._v(" "),s("td",[t._v("path")]),t._v(" "),s("td",[t._v("Specify the order of the page list.")]),t._v(" "),s("td",[s("a",{attrs:{href:"#sort-option"}},[t._v("sort option details")])])]),t._v(" "),s("tr",[s("td",[t._v("reverse")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("Reverse the order of the page list.")]),t._v(" "),s("td",[s("a",{attrs:{href:"#reverse-option"}},[t._v("reverse option details")])])]),t._v(" "),s("tr",[s("td",[t._v("filter")]),t._v(" "),s("td",[t._v("not set")]),t._v(" "),s("td",[t._v("Filter the contents to be output to the page list.")]),t._v(" "),s("td",[s("a",{attrs:{href:"#filter-option"}},[t._v("filter option details")])])])])]),t._v(" "),s("h3",{attrs:{id:"num-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#num-option","aria-hidden":"true"}},[t._v("#")]),t._v(" num option")]),t._v(" "),s("p",[t._v("You can specify the number of output pages.")]),t._v(" "),s("p",[t._v("You can specify the number of displays as "),s("code",[t._v("$lsx(num=5)")]),t._v(".\nDisplays the specified number of pages\nfrom the first to the Specified number of pages.")]),t._v(" "),s("p",[t._v("Specify with numbers and colons or plus signs,\nsuch as "),s("code",[t._v("$lsx(num=1:10)")]),t._v(".")]),t._v(" "),s("p",[t._v("num=1:10, meaning from the first to the tenth.")]),t._v(" "),s("p",[t._v("num=2: means from the second to the last item.")]),t._v(" "),s("p",[t._v("num=5+2 means from the 5th item to the next 2 items (5,6,7).")]),t._v(" "),s("h3",{attrs:{id:"depth-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#depth-option","aria-hidden":"true"}},[t._v("#")]),t._v(" depth option")]),t._v(" "),s("p",[t._v("You can output the page list by specifying the hierarchy.")]),t._v(" "),s("p",[t._v("You can specify the hierarchy to display by entering a number\nsuch as "),s("code",[t._v("$lsx(depth=1)")]),t._v(".")]),t._v(" "),s("p",[t._v("By default, all hierarchies are displayed.")]),t._v(" "),s("p",[t._v("Numbers can be specified in the same way as the num option above.")]),t._v(" "),s("h3",{attrs:{id:"sort-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort-option","aria-hidden":"true"}},[t._v("#")]),t._v(" sort option")]),t._v(" "),s("p",[t._v("The order of the page list can be specified by either of the following.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("$lsx(sort=path)")])]),t._v(" "),s("p",[t._v("Sorted in order of the name of the page name. (this setting by default)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("$lsx(sort=createdAt)")])]),t._v(" "),s("p",[t._v("List output in order of created date.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("$lsx(sort=updatedAt)")])]),t._v(" "),s("p",[t._v("List output in order of updated date.")])])]),t._v(" "),s("p",[t._v("If the sort option is not specified,\nthe page list is output in the order of page names.")]),t._v(" "),s("h3",{attrs:{id:"reverse-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reverse-option","aria-hidden":"true"}},[t._v("#")]),t._v(" reverse option")]),t._v(" "),s("p",[t._v("You can reverse the output order.")]),t._v(" "),s("p",[s("code",[t._v("$lsx(sort=updatedAt, reverse=true)")])]),t._v(" "),s("p",[t._v("In the case of the above combination,\nthe page list is output in descending order of update.")]),t._v(" "),s("h3",{attrs:{id:"filter-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-option","aria-hidden":"true"}},[t._v("#")]),t._v(" filter option")]),t._v(" "),s("p",[t._v("You can filter the contents to be output to the page list.")]),t._v(" "),s("p",[s("code",[t._v("$lsx(filter=2019)")])]),t._v(" "),s("p",[t._v("In this case, pages with "),s("code",[t._v("2019")]),t._v(" in the page name are output as a list.")]),t._v(" "),s("p",[t._v("filter is a partial match.")]),t._v(" "),s("h2",{attrs:{id:"github"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github","aria-hidden":"true"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),s("p",[t._v("This is a function built into GROWI with reference to\n"),s("a",{attrs:{href:"http://ukiya.sakura.ne.jp/index.php?PukiWiki%2F1.4%2F%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%2F%E7%8B%AC%E8%87%AA%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%2Flsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pukiwiki lsx plugin"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/weseek/growi-plugin-lsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),s("OutboundLink")],1)])])},[],!1,null,null,null);e.default=o.exports}}]);