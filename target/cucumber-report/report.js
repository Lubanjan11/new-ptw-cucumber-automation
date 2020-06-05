$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mct_login.feature");
formatter.feature({
  "line": 1,
  "name": "User Login Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nAs a User I want to perform a online login",
  "id": "user-login-mechanism",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 6034235600,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 3659936500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successfull login",
  "description": "",
  "id": "user-login-mechanism;successfull-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I complete login with James valid credentails",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect to seee profile Name as James Williams",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3394070300,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_expect_to_seee_profile_Name_as_James_Williams()"
});
formatter.result({
  "duration": 2095586000,
  "status": "passed"
});
formatter.after({
  "duration": 87151300,
  "status": "passed"
});
formatter.uri("mct_myacccount.feature");
formatter.feature({
  "line": 1,
  "name": "My Account",
  "description": "",
  "id": "my-account",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3185367200,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 2217424100,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3364194500,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 3884802100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "My Account options are available",
  "description": "",
  "id": "my-account;my-account-options-are-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I see all my account options available",
  "rows": [
    {
      "cells": [
        "My Orders"
      ],
      "line": 11
    },
    {
      "cells": [
        "Profile"
      ],
      "line": 12
    },
    {
      "cells": [
        "My Return Requests"
      ],
      "line": 13
    },
    {
      "cells": [
        "Change Password"
      ],
      "line": 14
    },
    {
      "cells": [
        "My Favorite Products"
      ],
      "line": 15
    },
    {
      "cells": [
        "My Favorite Sellers"
      ],
      "line": 16
    },
    {
      "cells": [
        "Seller Dashboard"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_see_all_my_account_options_available(DataTable)"
});
formatter.result({
  "duration": 134963300,
  "status": "passed"
});
formatter.after({
  "duration": 97733000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I complete login with James valid credentails",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to my account page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3204990500,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 3298657000,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_login_with_James_valid_credentails()"
});
formatter.result({
  "duration": 3339327600,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.I_navigate_to_my_account_page()"
});
formatter.result({
  "duration": 3765385500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Can be navigate to all options pages",
  "description": "",
  "id": "my-account;can-be-navigate-to-all-options-pages",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@WIP"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I expect all options links are working",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.I_expect_all_options_links_are_working()"
});
formatter.result({
  "duration": 5304723000,
  "status": "passed"
});
formatter.after({
  "duration": 90096100,
  "status": "passed"
});
formatter.uri("mct_regestration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration Mechanism",
  "description": "In order to get all membership benefit from multicart ecommerce \nI want to registratr my self",
  "id": "user-registration-mechanism",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Langing on MCT Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I open browser chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I land on multicart landing page",
  "keyword": "And "
});
formatter.match({
  "location": "mct_login_steps.i_open_browser_chrome()"
});
formatter.result({
  "duration": 3166044400,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_land_on_multicart_landing_page()"
});
formatter.result({
  "duration": 1959048700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Successfull registration",
  "description": "",
  "id": "user-registration-mechanism;successfull-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to Registration Page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I complete registration for MR FNAME",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I expect to seee profile Name MR FNAME",
  "keyword": "Then "
});
formatter.match({
  "location": "mct_login_steps.i_navigate_to_Registration_Page()"
});
formatter.result({
  "duration": 3515984800,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_complete_registration_for_MR_FNAME()"
});
formatter.result({
  "duration": 1649771300,
  "status": "passed"
});
formatter.match({
  "location": "mct_login_steps.i_expect_to_seee_profile_Name_MR_FNAME()"
});
formatter.result({
  "duration": 2085802800,
  "status": "passed"
});
formatter.after({
  "duration": 104973800,
  "status": "passed"
});
});