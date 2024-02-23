import React from 'react'
import img1 from "./byd.png"
import img2 from "./memak.png"
import img3 from "./zicar.png"
import img4 from "./Alibaba-Emblem.png"
export default function Friends() {
  return (
  <div className='friends-cover'>
      <div className='friends-cont'>
        <h1>Bizning hamkorlarimiz</h1>
        <h3><div className="div1"></div><div className="div2"></div></h3>
        <p>Kompaniyamiz 18 yildan beri jahonning 10 mingdan ortiq zavodlari bilan hamkorlikda ishlab kelmoqda.
        Xususan, Xitoy, Turkiya, Eron, Rossiya, Hindiston, Germaniya va Italiya kabi davlatlardagi korxonalar
        bilan mustahkam sherikchilik aloqalari o'rnatilgan.</p>
    </div>
    <div className="companions">
    <div><img src={img1} alt="" /></div>
    <div><img src={img2} alt="" /></div>
    <div><img src={img3} alt="" /></div>
    <div><img src={img4} alt="" /></div>
    </div>
  </div>
  )
}
