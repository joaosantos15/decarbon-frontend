import { useEffect } from 'react'

export const Rocket = () => {
  useEffect(() => {
    var starCount = 0

    window.onload = function () {
      var stars = document.getElementById('stars')
      stars.outerHTML = '<div id="stars"></div>'
      addStars()
    }
    function addStars() {
      console.log('test')
      var starLoop = setInterval(function () {
        console.log('test')
        var starChoice = Math.random()
        var x = Math.floor(window.innerWidth * Math.random())
        if (starChoice <= 0.5) {
          stars.outerHTML += `<div id="star${starCount}" class="star-wrapper"><svg class="star star1" viewBox="0 0 54 54"><g><g><rect y="18" width="54" height="18" fill="#fff"/><rect x="18" width="18" height="54" fill="#fff"/></g></g></svg></div>`
        } else {
          stars.outerHTML += `<div id="star${starCount}" class="star-wrapper"><svg class="star star2" viewBox="0 0 18 18"><g id="Layer_2" data-name="Layer 2"><g id="Content"><rect width="18" height="18" fill="#fff"/></g></g></svg></div>`
        }
        var currStar = document.getElementById(`star${starCount}`)
        currStar.style.left = x + 'px'
        starCount++
        if (starCount > 200) {
          clearInterval(starLoop)
        }
      }, 200)
    }
  }, [])

  return <div dangerouslySetInnerHTML={createMarkup()} />
}

function createMarkup() {
  return {
    __html: `<div id="rocket-animation">
    <div id="rocket-takeoff-wrapper">
      <div id="rocket-wrapper">
        <svg id="rocket" viewBox="0 0 251.5 396">
          <path id="Right_Fin" data-name="Right Fin" d="M1328.2,674.1s78.2,0,78.2,31.3S1422,846,1422,846s-46.9-156.3-93.8-125S1312.6,689.7,1328.2,674.1Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
          <path id="Left_Fin" data-name="Left Fin" d="M1264.2,674.1s-78.1,0-78.1,31.3S1170.5,846,1170.5,846s46.9-156.3,93.7-125S1279.9,689.7,1264.2,674.1Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
          <g id="Base_Rocket" data-name="Base Rocket">
            <path d="M1339.7,792c45.4-104.1,92.6-274.3-43.8-342-136.5,67.7-89.2,237.9-43.8,342Z" transform="translate(-1170.5 -450)" fill="#578476"/>
          </g>
          <g id="Shaded_Rocket" data-name="Shaded Rocket">
            <path d="M1296,450h-.2c-136.3,67.7-89.1,237.9-43.7,342H1296Z" transform="translate(-1170.5 -450)" fill="#04665a"/>
          </g>
          <g id="Bottom_Ring" data-name="Bottom Ring">
            <path d="M1227.7,727.9c2.5,7.6,5.1,15.2,7.8,22.6a334.4,334.4,0,0,0,120.8,0c2.7-7.3,5.3-14.9,7.8-22.6-18.6,6.3-42.3,10.1-68.1,10.1S1246.3,734.2,1227.7,727.9Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
          </g>
          <g id="Top_Ring" data-name="Top Ring">
            <path d="M1296,498c19,0,36.2-4.9,49.1-12.9a156.4,156.4,0,0,0-12.5-11.8c-8.8,7.8-22,12.7-36.6,12.7s-27.9-5-36.7-12.8a156.4,156.4,0,0,0-12.5,11.8C1259.7,493.1,1277,498,1296,498Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
          </g>
          <circle id="Window" cx="125.5" cy="126" r="36" fill="#314d51" stroke="#f9f9f9" stroke-miterlimit="10" stroke-width="10"/>
          <path id="Middle_Fin" data-name="Middle Fin" d="M1312.4,679.8c0-7.6-7.4-13.8-16.4-13.8s-16.4,6.2-16.4,13.8S1296,846,1296,846,1312.4,687.5,1312.4,679.8Z" transform="translate(-1170.5 -450)" fill="#314d51"/>
          <path d="M1260,792" transform="translate(-1170.5 -450)" fill="#314d51"/>
        </svg>  
        <div class="thruster">
          <div class="flame-wrapper">
            <div class="flame red"></div>
            <div class="flame orange"></div>
            <div class="flame gold"></div>
            <div class="flame white"></div>
          </div>
        </div>
      </div>
    </div>
    <svg id="planet" viewBox="0 0 2560 445">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Content">
          <path d="M0,445H2560V355.3C2211.6,133.3,1765,0,1278,0,792.9,0,347.8,132.3,0,352.8Z" fill="#ffa440"/>
        </g>
      </g>
    </svg>
    <div id="sky"></div>
  </div>
  <div id="stars">
        
  </div>
  </div>`,
  }
}