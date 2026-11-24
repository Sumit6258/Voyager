// Voyager timeline. Add milestones in chronological order.
// craft: 'v1' | 'v2' | 'both' · img: file in assets/images/ · future: true = estimate/projection
// art: true = artist’s concept or illustration · major: true = large centred milestone
// Optional: alt, credit (default “NASA/JPL-Caltech”), src (NASA link), link: ['label', '#anchor']
(() => {
const N = 'https://science.nasa.gov/', PV = N + 'mission/voyager/planetary-voyage/',
  IS = N + 'missions/voyager-program/10-things-going-interstellar/', FAQ = N + 'mission/voyager/frequently-asked-questions/',
  LD = N + 'mission/voyager/voyager-1/voyager-1-what-is-a-light-day/', PBD = N + 'mission/voyager/voyager-1s-pale-blue-dot/',
  GR = N + 'mission/voyager/golden-record-contents/';
window.TIMELINE = [
 {craft:'v2', date:'August 20, 1977', title:'Voyager 2 launches', text:'Voyager 2 leaves Kennedy Space Center, Florida, aboard a Titan-Centaur rocket, sixteen days before its twin.', img:'voyager2_launch.jpeg', src:PV},
 {craft:'v1', date:'September 5, 1977', title:'Voyager 1 launches', text:'Launched second, but on a faster trajectory. It will become the most distant human-made object.', img:'voyager1_launch.jpeg', src:PV},
 {craft:'both', date:'1977', title:'The Golden Record', text:'Each spacecraft carries a gold-plated copper record: sounds, images and greetings from Earth.', img:'golden_record_front.jpeg', src:GR, link:['Explore the record', '#golden-record']},
 {craft:'v1', date:'March 5, 1979', title:'Jupiter flyby', text:'Closest approach. Voyager 1 photographs Jupiter and its moons, and finds active volcanoes on Io.', img:'voyager1_jupiter.jpeg', src:PV},
 {craft:'v2', date:'July 9, 1979', title:'Jupiter flyby', text:'Voyager 2 explores Jupiter and its moons.', img:'voyager2_jupiter.jpeg', src:PV},
 {craft:'v1', date:'November 12, 1980', title:'Saturn flyby', text:'Saturn, its rings and moons. The encounter with Titan significantly changes the spacecraft’s trajectory.', img:'voyager1_saturn.jpeg', src:PV},
 {craft:'v2', date:'August 25, 1981', title:'Saturn flyby', text:'Voyager 2 completes its Saturn encounter and continues towards Uranus.', img:'voyager2_saturn.jpeg', src:PV},
 {craft:'v2', date:'January 24, 1986', title:'Uranus flyby', text:'The first, and so far only, spacecraft to visit Uranus: its atmosphere, rings and moons, seen up close.', img:'voyager2_uranus.jpeg', src:PV},
 {craft:'v2', date:'August 25, 1989', title:'Neptune flyby', text:'The first, and so far only, visit to Neptune and its moon Triton. The Grand Tour of the outer planets is complete.', img:'voyager2_neptune.jpeg', src:PV},
 {craft:'v2', date:'1989', title:'Final images', text:'Voyager 2’s imaging cameras are shut down to conserve power.', img:'voyager2_last_images.jpeg', src:PV},
 {craft:'v1', date:'February 14, 1990', title:'The Family Portrait and the Pale Blue Dot', text:'Voyager 1 turns its cameras back and photographs Earth from about 6 billion kilometres away. These are the last images either Voyager takes; the cameras are then switched off.', img:'voyager1_pale_blue_dot.jpeg', src:PBD, link:['Look back', '#pale-blue-dot']},
 {craft:'v1', date:'February 17, 1998', title:'Most distant human-made object', text:'Voyager 1 overtakes Pioneer 10.', img:'voyager1_deep_space.jpeg', art:true, src:IS},
 {craft:'v1', date:'December 16, 2004', title:'Termination shock', text:'Voyager 1 crosses the termination shock, where the solar wind slows dramatically.', img:'voyager1_termination_shock.jpeg', art:true, src:IS},
 {craft:'v2', date:'August 30, 2007', title:'Termination shock', text:'Voyager 2 crosses the termination shock.', img:'voyager2_termination_shock.jpeg', art:true, src:IS},
 {craft:'v1', date:'August 25, 2012', title:'Entering interstellar space', text:'Voyager 1 crosses the heliopause, the first human-made spacecraft to do so. This is not the edge of the Sun’s gravity: the Oort Cloud lies far beyond.', img:'voyager1_interstellar_space.jpeg', art:true, src:IS},
 {craft:'v2', date:'November 5, 2018', title:'Entering interstellar space', text:'Voyager 2 crosses the heliopause, the second spacecraft to do so.', img:'voyager2_interstellar_space.jpeg', art:true, src:IS},
 {craft:'v1', major:true, art:true, date:'November 18, 2026', title:'One light-day from Earth', text:'About 25.9 billion kilometres (16.1 billion miles). A radio signal takes about 24 hours to arrive, so a round-trip exchange would take about 48, if contact were possible. The first human-made object to get this far. NASA confirmed the milestone on November 19, 2026.', img:'voyager1_one_light_day.jpeg', src:LD},
 {craft:'both', future:true, art:true, date:'Coming years, uncertain', title:'Power runs down', text:'Instruments are switched off one by one as electrical power declines. When contact will end is unknown: NASA gives estimates, not a date.', img:'voyager_power_conservation.jpeg', src:FAQ},
 {craft:'v2', future:true, art:true, date:'Undated, not announced by NASA', title:'Voyager 2 nears one light-day', text:'A future threshold, still years away at its present speed. No reliable date has been announced, so none is shown.', img:'voyager2_one_light_day_future.jpeg', src:LD},
 {craft:'v1', future:true, art:true, date:'About 18,250 years after 2026', title:'One light-year', text:'A mathematical projection at Voyager 1’s present speed, not a scheduled event.', img:'voyager1_one_light_year_future.jpeg', src:LD},
 {craft:'v1', future:true, art:true, date:'About 40,272 CE', title:'Gliese 445', text:'Voyager 1 passes about 1.7 light-years from this star. A stellar flyby, not a visit; contact will almost certainly have ended long before.', img:'voyager1_gliese445_future.jpeg', src:FAQ},
 {craft:'v2', future:true, art:true, date:'About 40,000 years from now', title:'Ross 248', text:'Voyager 2 passes about 1.7 light-years from this star. A flyby, not a visit; the spacecraft will long since be silent.', img:'voyager2_ross248_future.jpeg', src:FAQ}
];
})();
