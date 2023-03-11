TESTING.md Document 

# List of Contents

## [Overview](#Overview)

### 1. Responsiveness issues with CWW site’s initial design and structure

### 2. Methods undertaken to assess the live CWW site’s structure and responsiveness

### 3. Users’ feedback on their experience using the CWW website



## Overview

This document is an extension of the ‘6. Testing’ section in the Coca Women Wellness [README.md file](https://github.com/SOlaCoder005/coca-women-wellness/blob/master/README.md). 

The document will provide information on factors that contributed to the development of the Coca Women Wellness website. The key factors are listed below: 

- Responsiveness issues with CWW site’s initial design and structure

- Methods undertaken to assess the live CWW site’s structure and responsiveness

- Users’ feedback on their experience using the CWW website

## 1. Responsiveness issues with CWW site’s initial design and structure

### **Issue:**

Although the initial wireframes for the CWW site presented a feasible concept around the site’s structure; execution of the plans raised some challenges. Once creating the initial pages, testing identified that the structure was severely limited in terms of responsiveness. For instance: 

- While the structure of the site was functional on **_desktop screens_**, the structure of the site was not functional on **_smaller device screens_** when rotated both horizontally and vertically. 

Moreover, through screen rotation, as well as reducing and expanding screen size, the following issues arose: 

- The text and image elements would not adapt appropriately to the changing screen widths and sizes. 

- Similarly, when reducing the screen width, elements such as the form would spill over the footer and header sections. Further, icons on the playlist page would overlay the previous ones.

These issues persisted even after applying media queries to the website’s initial structure. Visual examples of the issues mentioned above are evidenced in the image below: 

![](/assets/images/testing-evidence/cww-oldwebsitestructure.png)

### **Solution:** 

As demonstrated by the live CWW site, the responsiveness issue was resolved byrestructuring the site. It is for this reason, that the structure of live deployed CWW site differs from the initial wireframes. 

In more detail, the initial site’s structure was improved by applying a ‘grid system’. This method: 

- Helped form a robust structure for the live CWW site, and;

- Increased the site’s degree of responsivity to the changing screen widths and lengths (when accessed on varying devices).

## 2. Methods undertaken to assess the live CWW site’s structure and responsiveness

The [Responsively](https://responsively.app/download) and [Google (Chrome) Development Tools](https://developer.chrome.com/docs/devtools/open/) applications were used to consistently assess the degree to which the CWW website is responsive on various device sizes and screen orientations. This is demonstrated in the visuals below: 

 
![](/assets/images/testing-evidence/responsivelyapp-testing-home.html-cww.PNG)

![](/assets/images/testing-evidence/responsivelyapp-testing-about.html-cww.PNG)

![](/assets/images/testing-evidence/responsivelyapp-testing-recipes.html-cww.PNG)

![](/assets/images/testing-evidence/responsivelyapp-testing-playlists.html-cww.PNG)

![](/assets/images/testing-evidence/responsivelyapp-testing-connect.html-cww.PNG)

![](/assets/images/testing-evidence/responsivelyapp-testing-404.html-cww.PNG)



## 3. Users’ feedback on their experience using the CWW website

As part of additional testing, the users that participated in earlier stages of target audience research (see ‘2. User Stories’ of the [README.md file](https://github.com/SOlaCoder005/coca-women-wellness/blob/master/README.md)) were asked to test their access to the site and provide feedback on their experience when engaging with the site’s content. 

Specifically, the users were asked if they could: 

1. Confirm if there are any pages and links that don’t work.

2. Take a mobile screenshot of their favourite page on the site and send a reply.  

3.  Confirm what type of phone they use (e.g. IPhone7, Samsung Galaxy S4).

4. Not fill the form on the CONNECT page. 

- **Please NOTE:** The CWW form uses: https://formdump.codeinstitute.net as the post URL and used in the form once receiving approval from the Code Institute's Tutoring Support team. However, in line with data protection policies (e.g. GDPR), the users were asked not to submit their personal information into this form. 

Nonetheless, the form had already been tested and submitted information successfully. Please see the image below: 

![](/assets/images/testing-evidence/cww-form-submit-pass.PNG)

### 3.1 Summary: User's feedback

Based on the feedback provided by the users;

1. All pages appear to function as expected.

    The users’ feedback can be found below: 

    - [User A](/assets/images/testing-evidence/userafeedback.PNG) 
    - [User R](/assets/images/testing-evidence/userrfeedback.PNG) 
    - [User AM](/assets/images/testing-evidence/useramfeedback.PNG) 
    - [User L](/assets/images/testing-evidence/userlfeedback.PNG) 

2. The **_HOME, ABOUT and RECIPES_** pages were favoured the most. The **_PLAYLISTS_** page was also popular. 

3. The CWW website is accessible on multiple devices, including: 

    - Samsung Series(S10) 
    - iPhone (XR and 11)
    - Oppo Reno (Z and 4)
