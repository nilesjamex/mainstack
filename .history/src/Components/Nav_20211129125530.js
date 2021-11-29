import React from 'react';
import styled from "styled-components"

const Nav = () => {
    return (
        <Bar>
        <nav className="nav">
        <div className="navLogoText">
        <h3> <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.9617 17.3237C50.9617 16.7243 50.8131 16.2498 50.5158 15.9002C50.219 15.5506 49.765 15.3758 49.1543 15.3758C48.6595 15.3758 48.1809 15.5173 47.7189 15.8003C47.2895 16.0667 46.9349 16.3914 46.6542 16.7743V24.9159H43.4857V17.2987C43.4857 16.6994 43.337 16.2249 43.0398 15.8752C42.7429 15.5256 42.2889 15.3508 41.6783 15.3508C41.1996 15.3508 40.7295 15.4923 40.2674 15.7754C39.8381 16.0417 39.4835 16.3664 39.2028 16.7493V24.8659H36.059V12.8034H39.2028V14.3768C39.5166 13.9439 40.0364 13.5277 40.7626 13.1281C41.505 12.7285 42.2889 12.5287 43.1141 12.5287C43.9724 12.5287 44.6905 12.7201 45.268 13.1031C45.8291 13.4694 46.2253 14.0105 46.4563 14.7264C46.8356 14.127 47.397 13.6109 48.1393 13.178C48.8986 12.7451 49.7072 12.5287 50.5655 12.5287C51.6714 12.5287 52.5377 12.8284 53.165 13.4277C53.7756 14.0271 54.0806 14.9345 54.0806 16.1499V24.8659H50.9121V17.2488L50.9617 17.3237ZM63.0808 23.6172C62.6519 24.1001 62.107 24.4747 61.447 24.7411C60.8033 25.0075 60.0855 25.1407 59.2935 25.1407C58.6331 25.1407 57.9812 24.9908 57.3378 24.6911C56.7106 24.3914 56.1823 23.9419 55.7534 23.3425C55.3406 22.7598 55.1346 22.0355 55.1346 21.1697C55.1346 20.2873 55.3406 19.5631 55.7534 18.997C56.1658 18.4309 56.6859 18.0063 57.3128 17.7233C57.9069 17.4569 58.5673 17.3237 59.2935 17.3237C60.1021 17.3237 60.8445 17.4486 61.5214 17.6983C62.1648 17.9481 62.6931 18.3144 63.1055 18.7972V17.1239C63.1055 16.5079 62.8663 16.0084 62.3877 15.6255C61.9257 15.2592 61.2903 15.0761 60.4817 15.0761C59.1614 15.0761 57.9978 15.5506 56.9909 16.4996L55.8027 14.3768C56.5123 13.7608 57.3213 13.2862 58.2288 12.9533C59.1036 12.6369 60.0359 12.4788 61.0262 12.4788C62.5775 12.4788 63.8316 12.8367 64.7889 13.5526C65.7627 14.2852 66.2494 15.459 66.2494 17.074V24.8659H63.1055V23.6172H63.0808ZM63.0808 20.4205C62.8332 20.1042 62.4867 19.8544 62.0412 19.6713C61.5791 19.4882 61.092 19.3966 60.5807 19.3966C59.9369 19.3966 59.4005 19.5631 58.9716 19.8961C58.5423 20.2291 58.3278 20.6703 58.3278 21.2197C58.3278 21.7525 58.5423 22.1854 58.9716 22.5184C59.384 22.8347 59.9203 22.9929 60.5807 22.9929C61.092 22.9929 61.5791 22.9013 62.0412 22.7182C62.4867 22.5517 62.8332 22.3019 63.0808 21.9689V20.4705V20.4205ZM68.3283 10.7555C67.9652 10.3892 67.7834 9.93972 67.7834 9.40692C67.7834 8.89078 67.9732 8.44126 68.3529 8.05829C68.7326 7.67535 69.1781 7.48389 69.6898 7.48389C70.2177 7.48389 70.6636 7.66704 71.0267 8.03335C71.3898 8.39962 71.5711 8.84918 71.5711 9.38194C71.5711 9.91474 71.3898 10.3643 71.0267 10.7305C70.6636 11.0968 70.2177 11.28 69.6898 11.28C69.1781 11.28 68.7326 11.0885 68.3529 10.7056L68.3283 10.7555ZM71.2246 12.8783V24.9409H68.0807V12.8783H71.2246ZM81.2486 17.6234C81.2486 16.8243 81.0588 16.2498 80.6795 15.9002C80.2998 15.5506 79.755 15.3758 79.0453 15.3758C78.4678 15.3758 77.948 15.509 77.4859 15.7754C77.0238 16.0417 76.6442 16.3747 76.3473 16.7743V24.8909H73.2034V12.8284H76.3473V14.4017C76.7597 13.8856 77.3292 13.4361 78.0554 13.0532C78.765 12.6869 79.5817 12.5037 80.5062 12.5037C81.7934 12.5037 82.7587 12.845 83.4025 13.5277C84.0459 14.2103 84.3678 15.151 84.3678 16.3498V24.8659H81.2239V17.5735L81.2486 17.6234ZM86.4497 21.1198C86.9283 21.5527 87.5555 21.9273 88.3314 22.2437C89.14 22.5766 89.8908 22.7431 90.5839 22.7431C91.2604 22.7431 91.7641 22.6349 92.0941 22.4185C92.4406 22.202 92.6139 21.9023 92.6139 21.5194C92.6139 21.1365 92.416 20.8451 92.0197 20.6453C91.6401 20.4621 91.0379 20.279 90.2127 20.0959C89.2389 19.9294 88.4469 19.7296 87.8362 19.4965C87.2255 19.28 86.6807 18.9138 86.2025 18.3976C85.74 17.9148 85.509 17.2239 85.509 16.3248C85.509 15.6588 85.7073 15.0344 86.1031 14.4517C86.5159 13.869 87.0854 13.4028 87.8112 13.0532C88.5539 12.7035 89.4288 12.5287 90.4353 12.5287C92.2839 12.5287 93.893 13.0781 95.2626 14.177L94.0251 16.3498C93.662 15.9502 93.1583 15.6172 92.5149 15.3508C91.8877 15.0844 91.2111 14.9512 90.485 14.9512C89.9239 14.9512 89.47 15.0511 89.1234 15.2509C88.7769 15.4507 88.6036 15.7254 88.6036 16.075C88.6036 16.408 88.7934 16.6661 89.1731 16.8492C89.5358 17.0324 90.1053 17.2072 90.8812 17.3737C91.8218 17.5402 92.622 17.74 93.2823 17.9731C93.9423 18.2062 94.5037 18.5808 94.9657 19.0969C95.4443 19.6297 95.6835 20.3539 95.6835 21.2697C95.6835 22.4185 95.2299 23.3508 94.3219 24.0668C93.4144 24.7827 92.1518 25.1407 90.5346 25.1407C89.5112 25.1407 88.5212 24.9742 87.564 24.6412C86.6068 24.3082 85.8228 23.8586 85.2121 23.2926L86.5736 21.0699L86.4497 21.1198ZM98.2719 24.3415C97.6943 23.7587 97.4055 22.9346 97.4055 21.869V15.5755H95.4252V12.8034H97.4055V9.50683H100.574V12.8034H103V15.5755H100.574V21.0199C100.574 21.4029 100.673 21.7192 100.871 21.9689C101.069 22.2187 101.333 22.3435 101.663 22.3435C101.911 22.3435 102.125 22.3102 102.307 22.2437C102.522 22.1604 102.67 22.0772 102.753 21.9939L103.421 24.3914C102.86 24.9076 101.994 25.1656 100.822 25.1656C99.6996 25.1656 98.8579 24.8826 98.2969 24.3165L98.2719 24.3415ZM111.093 23.6172C110.664 24.1001 110.119 24.4747 109.459 24.7411C108.815 25.0075 108.097 25.1407 107.305 25.1407C106.645 25.1407 105.993 24.9908 105.349 24.6911C104.722 24.3914 104.194 23.9419 103.765 23.3425C103.352 22.7598 103.146 22.0355 103.146 21.1697C103.146 20.2873 103.352 19.5631 103.765 18.997C104.177 18.4309 104.697 18.0063 105.325 17.7233C105.919 17.4569 106.579 17.3237 107.305 17.3237C108.114 17.3237 108.856 17.4486 109.533 17.6983C110.176 17.9481 110.705 18.3144 111.117 18.7972V17.1239C111.117 16.5079 110.878 16.0084 110.399 15.6255C109.937 15.2592 109.302 15.0761 108.493 15.0761C107.173 15.0761 106.01 15.5506 105.003 16.4996L103.814 14.3768C104.524 13.7608 105.333 13.2862 106.241 12.9533C107.115 12.6369 108.048 12.4788 109.038 12.4788C110.589 12.4788 111.843 12.8367 112.801 13.5526C113.774 14.2852 114.261 15.459 114.261 17.074V24.8659H111.117V23.6172H111.093ZM111.093 20.4205C110.845 20.1042 110.498 19.8544 110.053 19.6713C109.591 19.4882 109.104 19.3966 108.592 19.3966C107.949 19.3966 107.412 19.5631 106.983 19.8961C106.554 20.2291 106.339 20.6703 106.339 21.2197C106.339 21.7525 106.554 22.1854 106.983 22.5184C107.396 22.8347 107.932 22.9929 108.592 22.9929C109.104 22.9929 109.591 22.9013 110.053 22.7182C110.498 22.5517 110.845 22.3019 111.093 21.9689V20.4705V20.4205ZM116.191 15.6005C116.736 14.6515 117.487 13.9023 118.444 13.3528C119.401 12.8034 120.49 12.5287 121.712 12.5287C122.867 12.5287 123.833 12.7368 124.608 13.153C125.4 13.5859 126.019 14.1104 126.465 14.7264L124.41 16.6494C123.816 15.7837 122.974 15.3508 121.885 15.3508C120.928 15.3508 120.152 15.6754 119.558 16.3248C118.964 16.9741 118.667 17.8232 118.667 18.8721C118.667 19.9211 118.964 20.7702 119.558 21.4195C120.152 22.0688 120.936 22.3935 121.91 22.3935C122.421 22.3935 122.892 22.277 123.321 22.0438C123.75 21.8108 124.113 21.4861 124.41 21.0699L126.465 22.9929C126.019 23.6256 125.4 24.15 124.608 24.5663C123.833 24.9825 122.867 25.1906 121.712 25.1906C120.49 25.1906 119.401 24.9159 118.444 24.3665C117.487 23.817 116.736 23.0678 116.191 22.1188C115.647 21.1697 115.374 20.0792 115.374 18.8472C115.374 17.6151 115.647 16.5246 116.191 15.5755V15.6005ZM130.401 21.7691V24.8659H127.258V8.20815H130.401V18.1728L134.932 12.8034H138.794L134.065 18.2727L138.942 24.8659H135.006L131.837 20.2208L130.401 21.7691Z" fill="#020409"/>
<path d="M28.6211 11.4381H20.822V3.64429H24.0962C26.5977 3.64429 28.6211 5.68553 28.6211 8.20924V11.4381Z" fill="#020409"/>
<path d="M0 27.8794V14.0732H7.76228V32.4444H4.52493C2.02334 32.4444 0 30.4031 0 27.8794Z" fill="#020409"/>
<path d="M10.411 27.8794V14.0732H18.1733V32.4444H14.9359C12.4344 32.4444 10.411 30.4031 10.411 27.8794Z" fill="#020409"/>
<path d="M20.822 27.8794V14.0732H28.5843V32.4444H25.347C22.8454 32.4444 20.822 30.4031 20.822 27.8794Z" fill="#020409"/>
<path d="M13.7587 3.60718H0V6.94739C0 9.39688 1.98655 11.401 4.41456 11.401H18.1733V8.06079C18.1733 5.61131 16.1867 3.60718 13.7587 3.60718Z" fill="#C91C5A"/>
</svg>
 </h3>
 <div className="navOptions">
        <h4>Pricing</h4>
        <h4>Blog</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
        </div>
        </div>
        
        <div className="navButtons">
        <button className="navButtons__signIn">Sign In</button>
        <button className="navButtons__create">Create New Account</button>
        </div>
        </nav>
           </Bar>
    )
}

const Bar = styled.div`
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    margin: 0 1.3rem;
}
.navLogoText {
    display: flex;
    width: 40%;
}
.navOptions {
    display: flex;
    width: 40%;

    h4 {
        margin: 0 0.4rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
    }
}
.navButtons__signIn {
    width: 5rem;
    background-color: transparent;
    border-radius: 100px;
    margin: 0 0.4rem;
    height: 3rem;
}
.navButtons__create {
    width: 10rem;
    background-color: #020409;
    border-radius: 100px;
    margin: 0 0.4rem;
    height: 3rem;
    color: #fff;
}
`

export default Nav


