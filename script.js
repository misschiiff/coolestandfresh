gsap.fromTo('.rolling-list', {
    y:-innerHeight/2
  },{
    scrollTrigger:{
      trigger:'#s1',
      start:'100% 100%',
      end:'100% 0',
      scrub:0
    },
    y:0,
    ease:'none'
  })
  
  const rollTL = gsap.timeline({defaults:{stagger:0.15, ease:'power1.inOut'}})
  .fromTo('.rolling-list li', {
    position:'absolute',
    left:0,
    top:0,
    width:'100%',
    textAlign:'center',
    transformPerspective:750,
    transformOrigin:'50% 50% -300px',
    rotateX:-60,
    opacity:0
  },{
    duration:0.3,
    rotateX:60,
    ease:'slow(0.1,0.8)'
  })
  .to('.rolling-list li', {duration:0.15, opacity:1}, 0)
  .to('.rolling-list li', {duration:0.15, opacity:0}, 0.15)
  .pause(1)// pause after 0, so the from state gets applied on all instances
  
  gsap.timeline({
    scrollTrigger:{
      trigger:'#s2',
      start:'0 0',
      end:'+=1500',
      pin:true,
      scrub:0
    }
  })
  .from('#s2 h2, #s2 h3', {opacity:0, duration:0.1, ease:'power3'}, 0)
  .fromTo('#s2', {color:'#000', background:'#fff'}, {duration:0.1, color:'#fff', background:'#000', ease:'power3'}, 0.25)
  .fromTo(rollTL, {progress:0.15}, {progress:0.85, ease:'none'}, 0)// tweak start/end progress to keep first/last item on screen
  .to('#s2 h2, #s2 h3', {opacity:0, duration:0.1, ease:'power3'}, 0.4)