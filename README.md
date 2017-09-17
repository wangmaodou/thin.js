thin.js
======
A start page for web.
## Overview
`thin.js` uses a small amount of code to show a start page, it can better display the content of the page, so that the page has more time to initialize, especially when the network is poor.
## Features
- Show slogan and icon.
- There is a animation when exit or show.
## Getting Started
```html
<body>
  <script src="thin.js"></script>
  <script type="text/javascript">
			thin.color('rgba(248,115,0,1)')
				.slogan('Hello')
				.delay(1000)
				.show();
			window.onload = function() {
				thin.exit();
			}
	</script>
</body>
```
## License
```
Copyright (C) 2017 wangmaodou. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
