<h1 align="center">
  <img alt="Gameplay" src="https://res.cloudinary.com/augustomarcelo/image/upload/c_scale,r_20,w_120/v1626530022/gameplay/icon_u7zzkx.png" />
  <br />
  <img src="https://img.shields.io/static/v1?label=Next%20Level%20Week&message=06&color=E51C44&labelColor=0A1033" alt="Next Level Week 6" />
</h1>

<p align="center">
  <a href="#screens">Screens</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-run">How to run</a>
</p>

## 💡 About the project

GamePlay is an application that helps you connect, organize your fun time and play with friends. The app has integration with Discord, allowing you to select servers and schedule dates to play with your friends! [Watch a video](https://youtu.be/9sFXXtoS0YY).

---

## 📷 Screens <a name="screens"></a>
<p align="center">
  <img src="https://res.cloudinary.com/augustomarcelo/image/upload/v1626540168/gameplay/Screenshot_20210717-120442_xhzkdh.png" alt="Sign In screen" width="200" />
  <img src="https://res.cloudinary.com/augustomarcelo/image/upload/v1626540167/gameplay/Screenshot_20210717-120506_cnez9l.png" alt="Home screen" width="200" />
  <img src="https://res.cloudinary.com/augustomarcelo/image/upload/v1626540167/gameplay/Screenshot_20210717-120635_rpt82b.png" alt="Create appointment screen" width="200" />
  <img src="https://res.cloudinary.com/augustomarcelo/image/upload/v1626540167/gameplay/Screenshot_20210717-120745_uyn8jf.png" alt="Select server modal" width="200" />
  <img src="https://res.cloudinary.com/augustomarcelo/image/upload/v1626540168/gameplay/Screenshot_20210717-120717_dqfeny.png" alt="Appointment details screen" width="200" />
  <img src="https://res.cloudinary.com/augustomarcelo/image/upload/v1626540167/gameplay/Screenshot_20210717-120728_dagkks.png" alt="Sign out modal" width="200" />
</p>

---

## ⚙ Technologies <a name="technologies"></a>

This project was developed with the following technologies:

  - [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) to save locally the created appointments;
  - [expo-linear-gradient](https://docs.expo.io/versions/latest/sdk/linear-gradient/) to create gradient effects in components;
  - [expo-auth-session](https://docs.expo.io/versions/latest/sdk/auth-session/) to connect with Discord API by using OAuth2;
  - [react-native-svg](https://github.com/react-native-svg/react-native-svg) to import SVG files and use them as components;
  - [expo-app-loading](https://docs.expo.io/versions/latest/sdk/app-loading/) to keep SplashScreen visible white the assets are loaded
  - [react-native-iphone-x-helper](https://github.com/ptelad/react-native-iphone-x-helper) to help with iPhone screen details;
  - [axios](https://axios-http.com/) para fazer solicitações à API Discord;
  - and more...

---

## 💻 How to run <a name="how-to-run"></a>

  ```bash
    # clone repository
    git clone https://github.com/AugustoMarcelo/gameplay.git project-name

    # enter folder
    cd project-name

    # download dependencies
    yarn

    # project
    expo start 
  ```

  > You should create a .env file based on the .env.example and fit the listed properties

  <span style="color:#E51C44">If you try to connect with Discord and the link doesn't to open, change your connection mode to <strong>Tunnel</strong></span>

---

## 🤯 Faced problems

In this section, I'll list a problem that I came across and how I have resolved.

For some reason, RectButton from react-native-gesture-handler don't works fine when placed directly inside React Native Modal component (see [SignOut component](https://github.com/AugustoMarcelo/gameplay/blob/main/src/components/SignOut/index.tsx#L25)). I didn't want to lose the effect provided by RectButton, so I wrapped it up with TouchableWithoutFeedback.

[ts]: https://www.typescriptlang.org