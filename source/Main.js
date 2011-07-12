/************************************************************************************************************************
Copyright (c) 2011, Nathan McIntyre (http://www.natemcintyre.com/)
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the 
following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following
	  disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following
	  disclaimer in the documentation and/or other materials provided with the distribution.
    * Neither the name of Nathan McIntyre nor the names of its contributors may be used to endorse or promote products
	  derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
************************************************************************************************************************/
enyo.kind({
	name: "Main",
	kind: "Control",
	className: "main",
	layoutKind: "VFlexLayout",
	components: [
		//SplashScreenDemoHeader
		{ name: "SplashScreenDemoHeader", kind: "Header", className: "splashscreendemoheader", content: "SplashScreen Demo" },
		//ShowSplashScreenButton
		{ name: "ShowSplashScreenButton", kind: "Button", className: "showsplashscreenbutton", label: "Show Splash Screen", onclick: "showSplashScreenButtonHandler" },
		//InfoDisplay
		{
			name: "InfoDisplay",
			kind: "Control",
			className: "infodisplay",
			layoutKind: "VFlexLayout",
			components: [
				{ kind: "Control", content: "To modify the duration of the splashscreen fade and total display time, you can change the following files at the lines specified below:" },
				{ kind: "Control", className: "filelocation", content: "css/SplashScreen.css @ line 40" },
				{ kind: "Control", className: "filelocation", content: "source/SplashScreen.js @ line 48" },
				{ kind: "Control" }, //spacer
				{ kind: "Control", content: "To define custom splashscreen image, please modify the following file at the line specified below:" },
				{ kind: "Control", className: "filelocation", content: "source/SplashScreen.js @ line 38" }
			]
		},
		//DevelopedBy
		{ name: "DevelopedBy", kind: "Control", className: "developedby", content: "Developed By: Nathan McIntyre (http://www.natemcintyre.com/)" },
		//SplashScreen
		{ name: "SplashScreen", kind: "SplashScreen" }
	],
	showSplashScreenButtonHandler : function () {
		this.$.SplashScreen.showSplashScreen();
	},
	create : function () {
		this.inherited(arguments);
		
		//show splash screen when created
		this.$.SplashScreen.showSplashScreen();
	},
	destroy : function () {
		this.inherited(arguments);
	}
});