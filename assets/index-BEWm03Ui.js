import{d as t,t as i,j as e}from"./index-Dx0kNidJ.js";const m=[{id:"0",img:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header_russian.jpg?t=1736424367",name:"Ведьмак 3 Дико срать охота",price:699},{id:"1",img:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg?t=1737495883",name:"Ghost of Tsushima Director's cut",price:4199},{id:"3",img:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1517290/header.jpg?t=1742288684",name:"Battlefield 2042",price:459},{id:"3",img:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1237970/header.jpg?t=1726160226",name:"Titanfall 2",price:299},{id:"4",img:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1742580411",name:"The Last of Us Part II Remastered",price:3599},{id:"5",img:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1259420/header.jpg?t=1741879384",name:"Gays done",price:999}],l=t.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,h=t.h1`
  color: ${({theme:r})=>r.palette.gray[100]};
  font-size: 32px;
  text-align: center;
`,g=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
`,s={Container:l,Title:h,GamesGrid:g},o=t.div`
  position: relative;
  //width: 280px;
  height: 160px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 8px;

  &:hover {
    transform: scale(1.05);
  }
`,x=t.div`
  position: relative;
  width: 100%;
  height: 100%;
`,f=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  ${o}:hover & {
    //transform: scale(1.05);
  }
`,u=t.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 16px;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${o}:hover & {
    transform: translateY(0);
  }
`,j=t.h3`
  color: ${i.palette.gray[100]};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,v=t.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 0, 0, 0.5);
  padding: 6px 12px;
  border-radius: 4px;
`,w=t.span`
  color: ${i.palette.gray[100]};
  font-size: 16px;
  font-weight: 600;
`;t.span`
  color: ${i.palette.red[500]};
  font-size: 14px;
  font-weight: 600;
`;const a={CardWrapper:o,ImageWrapper:x,GameImage:f,Overlay:u,GameTitle:j,PriceWrapper:v,Price:w},_=({name:r,price:n,img:p})=>{const c=d=>new Intl.NumberFormat("ru-RU",{style:"currency",currency:"RUB"}).format(d);return e.jsxs(a.CardWrapper,{children:[e.jsxs(a.ImageWrapper,{children:[e.jsx(a.GameImage,{src:p,alt:r}),e.jsx(a.Overlay,{children:e.jsx(a.GameTitle,{children:r})})]}),e.jsx(a.PriceWrapper,{children:e.jsx(a.Price,{children:c(n)})})]})},b=()=>e.jsxs(s.Container,{children:[e.jsx(s.Title,{children:"Популярные игры"}),e.jsx(s.GamesGrid,{children:m.map(r=>e.jsx(_,{name:r.name,price:r.price,img:r.img},r.id))})]});export{b as HomePage};
