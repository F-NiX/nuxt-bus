const a=new Map
export default{all:a,on(t,h){const s=a.get(t)
if(s)s.push(h)
else a.set(t,[h])},off(t,h){const s=a.get(t)
if(!s)return
if(h)s.splice(s.indexOf(h)>>>0,1)
else a.set(t,[])},emit(t,e){let s=a.get(t)
if(s)s.slice().map(h=>h(e))
s=a.get('*')
if(s)s.slice().map(h=>h(t,e))}}