// varebles to
let sliders = document.querySelector("#slide2");
let slideIndex = 1;
const munobars = document.querySelector(".nav-items3");
const munodivs = document.querySelector("#shomodalas");
const mybody = document.querySelector("body");
const sliderss = document.querySelector("#slider");
const navbars = document.querySelector(".fa-bars");
const iconssclose = document.querySelector(".closeiconse");
const shops = document.querySelector(".sophs");
const shopss = document.querySelector("#sopings");
const headers = document.querySelector("#header");
const sliders1 = document.querySelector("#slide2");
const numbers1 = document.querySelector(".numberss1");
const numbers2 = document.querySelector(".numberss2");
const numbers3 = document.querySelector(".numberss3");
const serchsimgs = document.querySelector(".serch-imgs");
const clossech = document.querySelector(".clos-sech");
const inputssechs = document.querySelector("#inputs-serchs");
const boxserch = document.querySelector(".li-liste-serch");
const closeserchbox = document.querySelector(".conters-vido");
const conteritems = document.querySelector(".section-conters-carts");
const conterrritems = document.querySelector(".section-carts-items-prodocts");
const conter2 = document.querySelector("#oo");
const totlass = document.querySelector(".tatal");
const totlasnumbers = document.querySelector("#shopsss");
const contenrtotlapeices = document.querySelector(".contrers-totolas");
let plasstocarts = document.querySelectorAll(".miness");
const clerdeletcarts = document.querySelector(".shops1");
const deletitems = document.querySelector(".deletitems");
const plass = document.querySelectorAll(".miness");
const navbar = document.querySelector('.mady');
const lodedsimgs = document.querySelector(".imglodades34");
let carts = [];
let butonsDomese = [];
let allProdocts = [];
let filterss = {
    serchItems: '',
}

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};




// to class 

class Prodocts {
    getdata() {
        // return axios('http://localhost:3000/posts')
        //     .then((resoe) => {
        //         console.log(resoe.data);
        //     }).catch((eroro) => {
        //         console.log(eroro);
        //     });
        return items;
    }

    getitems() {
        return pro;
    }

    getcarts() {
        return pro2;
    }

    getserchbtns() {
        return pro4;
    }
};


class UI {
    displaypro(posts) {
        let a = '';


        posts.forEach((ite) => {
            a += `<div class="items-carts">
            <img src="${ite.imgs}" alt="">
            <h1>DES TRIGE</h1>
            <span>${ite.priecs}</span>
            <ins class="mypriecstotak">$ 14.77</ins><br>
            <div class="link-items">
                <button class="mylinks-centerts" data-id= ${ite.id}>Add to carts</button>
            </div>
        </div>`;
            conteritems.innerHTML = a;
        });
    };

    displayprodoctsitems(pro) {
        let v = '';
        pro.forEach((ite) => {
            v += `<div class="items-prodocts-shops slide-2">
            <div class="imgs-top">
                <img class="img1" src="${ite.imgs}" alt="">
                <div class="diros">
                    <span>10 / 5</span>
                    <img class="imgss" src="../images/Actions-rating-icon.png" alt="">
                </div>
            </div>
            <div class="totalsa">
                <div class="titless">
                    <h1>${ite.titels}</h1>
                    <h2>${ite.tite}</h2>
                </div>
                <div class="shopsss">
                    <span>${ite.priecs}</span>
                    <img src="../images/icons8-add-shopping-cart-24.png" alt="" data-id='${ite.id}' class = 'myslectscartsitems'>
                </div>

            </div>
        </div>`;
            conterrritems.innerHTML = v;
        });
    };

    displayprodoctsitems2(pro2) {
        let ss = '';
        pro2.forEach((ite) => {
            ss += `<div class="items-prodocts-shops slide-1">
            <div class="imgs-top">
                <img class="img1" src="${ite.imgs}" alt="">
                <div class="diros">
                    <span>10 / 5</span>
                    <img class="imgss" src="../images/Actions-rating-icon.png" alt="">
                </div>
            </div>
            <div class="totalsa">
                <div class="titless">
                    <h1>${ite.titels}</h1>
                    <h2>sum is simply dummy text of </h2>
                </div>
                <div class="shopsss">
                    <span>${ite.kaka}</span>
                    <img src="../images/icons8-add-shopping-cart-24.png" data-id='${ite.id}' class = 'sevedcartsitems2' >
                </div>

            </div>
        </div>`;
            conter2.innerHTML = ss;
        });
    };

    // number 1 carts items 
    getbtns() {
        // get btns all
        const bttall = [...document.querySelectorAll(".mylinks-centerts")];
        butonsDomese = bttall;

        bttall.forEach((btns) => {
            const id = btns.dataset.id;

            const findebtnsid = carts.find((p) => p.id === parseInt(id));

            if (findebtnsid) {
                btns.innerText = 'in carts';
                btns.disabled = true;
            }
            btns.addEventListener("click", (event) => {
                event.target.innerText = 'in carts';
                event.target.disabled = true;
                // console.log(event.target.dataset.id);

                let addprodocts = { ...Stroge.getprodocts(id), quantity: 1 };
                // console.log(addprodocts);
                carts = [...carts, addprodocts];
                Stroge.sevedprodocts(carts);

                this.setcartvalue(carts);
                this.addtocartsprices(addprodocts);
            });
        });
    };

    setcartvalue(carts) {
        let temcartsitems = 0;

        // NaN
        let totlaprices = carts.reduce((acc, carts) => {
            temcartsitems += carts.quantity;
            return acc + carts.quantity * carts.priecs;
        }, 0);

        totlass.innerText = `total price : ${temcartsitems.toFixed(2)} $`;
        totlasnumbers.innerText = temcartsitems;
        // console.log(temcartsitems);
    };

    addtocartsprices(cartsitmes) {
        const cretsdic = document.createElement("div");
        cretsdic.classList.add('conter-muno');
        cretsdic.innerHTML = ` <div class="conter-muno">
        <div class="item-muno muno1">
            <h1>carts items</h1>
            <img src="${cartsitmes.imgs}" alt="">
        </div>
        <div class="item-muno muno2">
            <h1>${cartsitmes.titels}</h1>
            <p>onlines</p>
            <div class="col" id="cols">
                <div class="pulse-base pulse-circle"></div>
            </div>
        </div>
        <div class="item-muno muno3">
            <div class="conter-plass">
            <div class="miness plas1" data-id=${cartsitmes.id}>+</div>
            <span class="numbers">1</span>
            <div class="miness mines1" data-id=${cartsitmes.id}>-</div>
            </div>
        </div>
        <div class="item-muno muno4">
            <div class="conters-hdings">
                <h1>${cartsitmes.priecs}</h1>
                <h2>roff cafs</h2>
                <h3 class = 'deletitems'>delet</h3>
            </div>
        </div>
    </div>`;

        contenrtotlapeices.appendChild(cretsdic);

    };

    setupe() {
        // get carts in localstroge
        carts = Stroge.getcartsitems() || [];
        carts.forEach(items => this.addtocartsprices(items));
        this.setcartvalue(carts);
    };

    clerfeltcartsitmes() {
        clerdeletcarts.addEventListener("click", () => {
            carts.forEach((carts) => {
                this.removItems(carts.id);
            });


            while (contenrtotlapeices.children.length) {
                contenrtotlapeices.removeChild(contenrtotlapeices.children[0]);
            }

        });
    };

    removItems(id) {
        carts = carts.filter((cartitemss) => { cartitemss.id !== id });
        this.setcartvalue(carts);

        Stroge.sevedprodocts(carts);

        const butoons = butonsDomese.find((btn) => btn.dataset.id == parseInt(id));
        butoons.innerText = 'add to carts';
        butoons.disabled = false;
    };

    cartsloGics() {
        munodivs.addEventListener("click", (event) => {
            if (event.target.classList.contains('plas1')) {
                const eventplas = event.target;

                const addItems = carts.find(citeme => citeme.id == eventplas.dataset.id);

                addItems.quantity++;
                this.setcartvalue(carts);
                Stroge.sevedprodocts(carts);
                eventplas.nextElementSibling.innerText = addItems.quantity;

            } else if (event.target.classList.contains('mines1')) {
                const eventplas1 = event.target;

                const addItems1 = carts.find(citeme => citeme.id == eventplas1.dataset.id);

                if (addItems1.quantity === 1) {
                    let somodlasitems = document.querySelector(".shoconfirms");
                    let confirmitems = somodlasitems.style.display = 'block';
                    if (somodlasitems) {
                        let contenrtotlapeices = document.querySelector(".conter-muno");
                        munodivs.style.backgroundColor = 'rgba(211, 173, 127 , 0.9)';

                        if (contenrtotlapeices) {
                            // click to yess 
                            const btns1 = document.querySelector(".btns1");
                            btns1.addEventListener("click", () => {
                                somodlasitems.style.transform = 'translatex(20px)';
                                contenrtotlapeices.remove(eventplas1.parentElement);
                                munodivs.style.backgroundColor = 'rgb(216, 216, 216)';
                            });

                            // click to noo
                            const btns2 = document.querySelector(".btns2");
                            btns2.addEventListener("click", () => {
                                munodivs.style.backgroundColor = 'rgb(216, 216, 216)';
                                somodlasitems.style.display = 'none';
                                somodlasitems.style.transform = 'translatex(-100px)';
                                somodlasitems.style.transition = 'all 0.8s ease-in-out';
                            });
                        }
                    }

                };

                addItems1.quantity--;
                this.setcartvalue(carts);
                Stroge.sevedprodocts(carts);
                eventplas1.previousElementSibling.innerText = addItems1.quantity;
            }
        })
    };

    removeItems(id) {
        carts = carts.filter((citme) => citme.id !== id);
        this.setcartvalue(carts);
        Stroge.sevedprodocts(carts);
        this.getsengilButoons(id);
    }

    getsengilButoons(id) {
        const butoons = butonsDomese.find((btn) => btn.dataset.id == parseInt(id));
        butoons.innerText = 'add to cart';
        butoons.disabled = false;
    }
    // but number 1 carts items 


    // to number 2 carts items 

    getbntscartsimtes1() {
        let imgsbtns = document.querySelectorAll('.myslectscartsitems');
        // console.log(imgsbtns);
        imgsbtns.forEach((btnsimgs) => {
            let id = btnsimgs.dataset.id;

            let btnsfindes = carts.find((o) => { o.id === parseInt(id) });

            if (btnsfindes) {
                btnsimgs.innerText = 'yesssss';
                btnsimgs.disabled = true;
            }
            btnsimgs.addEventListener("click", (btnsimn) => {
                // console.log(btnsimn.target.dataset.id);
                btnsimn.target.style.backgroundColor = 'var(--main-color)';

                let addprodocts1 = { ...Stroge.getprocarts2(id), quantity: 1 };
                carts = [...carts, addprodocts1];
                Stroge.sevedsproitmes2(carts);

                this.setcartvalue2(carts);
                this.addtocartsprices2(addprodocts1);
            });


        });
    };

    setcartvalue2(carts) {
        let temcartsitems2 = 0;

        // NaN
        let totlaprices = carts.reduce((acc, carts) => {
            temcartsitems2 += carts.quantity;
            return acc + carts.quantity * carts.priecs;
        }, 0);

        totlass.innerText = `total price : ${temcartsitems2.toFixed(2)} $`;
        totlasnumbers.innerText = temcartsitems2;
        // console.log(temcartsitems2);
    };

    addtocartsprices2(cartsitmes) {
        const cretsdic = document.createElement("div");
        cretsdic.classList.add('conter-muno');
        cretsdic.innerHTML = ` <div class="conter-muno">
        <div class="item-muno muno1">
            <h1>carts items</h1>
            <img src="${cartsitmes.imgs}" alt="" style='border-radius: 63px; width: 200px'>
        </div>
        <div class="item-muno muno2">
            <h1>${cartsitmes.titels}</h1>
            <p>onlines</p>
            <div class="col" id="cols">
                <div class="pulse-base pulse-circle"></div>
            </div>
        </div>
        <div class="item-muno muno3">
            <div class="conter-plass">
            <div class="miness plas1" data-id=${cartsitmes.id}>+</div>
            <span class="numbers">1</span>
            <div class="miness mines1" data-id=${cartsitmes.id}>-</div>
            </div>
        </div>
        <div class="item-muno muno4">
            <div class="conters-hdings">
                <h1>${cartsitmes.priecs}</h1>
                <h2>roff cafs</h2>
                <h3 class = 'deletitems'>delet</h3>
            </div>
        </div>
    </div>`;

        contenrtotlapeices.appendChild(cretsdic);

    };


    // to number 3 carts items 

    getcartsimtesprodcots3() {
        let btnforimgs = document.querySelectorAll(".sevedcartsitems2");

        btnforimgs.forEach((items) => {
            let id = items.dataset.id;

            let btnsfindes3 = carts.find((o) => { o.id === parseInt(id) });

            if (btnsfindes3) {
                items.innerText = 'yesssss';
                items.disabled = true;
            }
            items.addEventListener("click", (btnsimn) => {
                btnsimn.target.style.backgroundColor = 'var(--main-color)';
                // console.log(btnsimn.target);
                let addprodocts3 = { ...Stroge.getprocarts3(id), quantity: 1 };
                console.log(addprodocts3);
                carts = [...carts, addprodocts3];
                Stroge.sevedsproitmes3(carts);

                this.setcartvalue2(carts);
                this.addtocartsprices2(addprodocts3);
            });


        });
    };

    setcartvalue2(carts) {
        let temcartsitems2 = 0;

        // NaN
        let totlaprices = carts.reduce((acc, carts) => {
            temcartsitems2 += carts.quantity;
            return acc + carts.quantity * carts.priecs;
        }, 0);

        totlass.innerText = `total price : ${temcartsitems2.toFixed(2)} $`;
        totlasnumbers.innerText = temcartsitems2;
        // console.log(temcartsitems2);
    };

    addtocartsprices2(cartsitmes) {
        const cretsdic3 = document.createElement("div");
        cretsdic3.classList.add('conter-muno');
        cretsdic3.innerHTML = ` <div class="conter-muno">
        <div class="item-muno muno1">
            <h1>carts items</h1>
            <img src="${cartsitmes.imgs}" alt="" style='border-radius: 63px; width: 200px'>
        </div>
        <div class="item-muno muno2">
            <h1>${cartsitmes.titels}</h1>
            <p>onlines</p>
            <div class="col" id="cols">
                <div class="pulse-base pulse-circle"></div>
            </div>
        </div>
        <div class="item-muno muno3">
            <div class="conter-plass">
            <div class="miness plas1" data-id=${cartsitmes.id}>+</div>
            <span class="numbers">1</span>
            <div class="miness mines1" data-id=${cartsitmes.id}>-</div>
            </div>
        </div>
        <div class="item-muno muno4">
            <div class="conters-hdings">
                <h1>${cartsitmes.priecs}</h1>
                <h2>roff cafs</h2>
                <h3 class = 'deletitems'>delet</h3>
            </div>
        </div>
    </div>`;

        contenrtotlapeices.appendChild(cretsdic3);

    };

    // to number 4 serch filters 
    // serchitems() {
    //     let btnsserch = document.querySelectorAll(".li-liste-serch");
        

    //     btnsserch.forEach((btns) => {
    //         let id = btns.dataset.id;

    //         //  id === id btns 
    //         let findsbtns = carts.find((tt) => tt.id === parseInt(id));



    //         if(findsbtns) {
    //             btns.innerText = 'yesssss';
    //             btns.disabled = true;
    //         }
    //         btns.addEventListener("click" , (onclickbtns) => {
    //             console.log(onclickbtns.target.dataset.id);

    //             // debog and in botom bogs ;( 
    //             let addprodocts4 = { ...Stroge.getprocarts4(id), quantity: 1 };
    //             console.log(addprodocts4);
    //             carts = [...carts, addprodocts4];
    //             Stroge.sevedsproitmes4(carts);

    //             // this.setcartvalue4(carts);
    //             // this.addtocartsprices4(addprodocts4);
    //         })
            

    //     });
    // };

    // setcartvalue4(carts) {
    //     let temcartsitems2 = 0;

    //     // NaN
    //     let totlaprices = carts.reduce((acc, carts) => {
    //         temcartsitems2 += carts.quantity;
    //         return acc + carts.quantity * carts.priecs;
    //     }, 0);

    //     totlass.innerText = `total price : ${temcartsitems2.toFixed(2)} $`;
    //     totlasnumbers.innerText = temcartsitems2;
    //     // console.log(temcartsitems2);
    // };

    // addtocartsprices4(cartsitmes) {
    //     const cretsdic3 = document.createElement("div");
    //     cretsdic3.classList.add('conter-muno');
    //     cretsdic3.innerHTML = ` <div class="conter-muno">
    //     <div class="item-muno muno1">
    //         <h1>carts items</h1>
    //         <img src="${cartsitmes.imgs}" alt="" style='border-radius: 63px; width: 200px'>
    //     </div>
    //     <div class="item-muno muno2">
    //         <h1>${cartsitmes.titels}</h1>
    //         <p>onlines</p>
    //         <div class="col" id="cols">
    //             <div class="pulse-base pulse-circle"></div>
    //         </div>
    //     </div>
    //     <div class="item-muno muno3">
    //         <div class="conter-plass">
    //         <div class="miness plas1" data-id=${cartsitmes.id}>+</div>
    //         <span class="numbers">1</span>
    //         <div class="miness mines1" data-id=${cartsitmes.id}>-</div>
    //         </div>
    //     </div>
    //     <div class="item-muno muno4">
    //         <div class="conters-hdings">
    //             <h1>${cartsitmes.priecs}</h1>
    //             <h2>roff cafs</h2>
    //             <h3 class = 'deletitems'>delet</h3>
    //         </div>
    //     </div>
    // </div>`;

    //     contenrtotlapeices.appendChild(cretsdic3);

    // };
};


class Stroge {
    // numbers 1
    static sevedsProdocts(prodocts) {
        localStorage.setItem('prodocts', JSON.stringify(prodocts));
    };

    static getprodocts(id) {
        const _pro = JSON.parse(localStorage.getItem('prodocts'));
        // console.log(_pro);
        return _pro.find((p) => p.id === parseInt(id));
    };

    static sevedprodocts(carts) {
        localStorage.setItem('carts', JSON.stringify(carts));
    };

    static getcartsitems() {
        return JSON.parse(localStorage.getItem('carts')) ? JSON.parse(localStorage.getItem('carts')) : [];
    };

    // numbers 2 
    static cartsitems2(carts2) {
        localStorage.setItem('carts2', JSON.stringify(carts2));
    };

    static getprocarts2(id) {
        const pro2 = JSON.parse(localStorage.getItem('carts2'));
        // console.log(pro2);
        return pro2.find((d) => d.id === parseInt(id));
    };

    static sevedsproitmes2(carts) {
        localStorage.setItem('carts', JSON.stringify(carts));
    };

    // numbers 3 
    static getcartsitmes3(carts3) {
        localStorage.setItem('carts3', JSON.stringify(carts3));
    };

    static getprocarts3(id) {
        const _pro3 = JSON.parse(localStorage.getItem('carts3'));
        // console.log(_pro3);
        return _pro3.find((p) => p.id === parseInt(id));
    };

    static sevedsproitmes3(carts) {
        localStorage.setItem('carts', JSON.stringify(carts));
    };


    // number 4 serch filters
    // static serchitems(serchs) {
    //     localStorage.setItem('serchs' , JSON.stringify(serchs));
    // };

    // static getprocarts4(id) {
    //     let pro4 = JSON.parse(localStorage.getItem('serchs'));
    //     // console.log(pro4);
    //     return pro4.find((oo) => oo.id === parseInt(id));
    // };

    // static sevedsproitmes4(carts) {
    //     localStorage.setItem('carts' , JSON.stringify(carts)); 
    // };

};



document.addEventListener('DOMContentLoaded', () => {
    const pro = new Prodocts();
    const getpro = pro.getdata();
    const itemspro = pro.getitems();
    const itespro2 = pro.getcarts();
    const serchite = pro.getserchbtns();
    const ui = new UI();
    ui.displaypro(getpro);
    ui.displayprodoctsitems(itemspro);
    ui.displayprodoctsitems2(itespro2);
    ui.getbtns();
    ui.setupe();
    ui.clerfeltcartsitmes();
    ui.cartsloGics();
    ui.getbntscartsimtes1();
    ui.getcartsimtesprodcots3();
    Stroge.sevedsProdocts(getpro);
    Stroge.cartsitems2(itemspro);
    Stroge.getcartsitmes3(itespro2);
    axios.get('http://localhost:3000/posts')
        .then((yes) => {
            allProdocts = yes.data;
            randomeFilters(yes.data, filterss);
        }).catch((eroes) => {
            console.log(eroes);
        });

});




// events 
sliders.addEventListener("click", (e) => {

})

shops.addEventListener("click", (w) => {
    munodivs.style.transform = 'translateX(-29px)';
    shopss.style.display = 'none';
    iconssclose.style.display = 'block';
    shops.style.display = 'block';
    navbar.style.display = 'none';
});

shopss.addEventListener("click", () => {
    munodivs.style.transform = 'translateX(-40px)';
    shopss.style.display = 'none';
    iconssclose.style.display = 'none';
    shops.style.display = 'block';

})

iconssclose.addEventListener("click", () => {
    navbars.style.dsiplay = 'block';
    munodivs.style.transform = 'translateY(-790px)';
    headers.style.opacity = '1';
    munodivs.style.transition = 'all 0.8s ease-in-out';
    munobars.style.display = 'block';
    iconssclose.style.display = 'none';
    navbar.style.display = 'block';
})

sliderss.addEventListener("click", () => {
    navbars.style.dsiplay = 'block';
    munodivs.style.transform = 'translateX(-390px)';
    headers.style.opacity = '1';
    munodivs.style.transition = 'all 0.8s ease-in-out';
    munobars.style.display = 'block';
    iconssclose.style.display = 'none';
})

sliders1.addEventListener("click", () => {
    numbers1.style.background = 'white';
    numbers2.style.background = '#d3ad7f';
    numbers3.style.background = 'white';
})

numbers2.addEventListener("click", () => {
    numbers2.style.background = 'white';
    numbers3.style.background = 'white';
    numbers2.style.background = '#d3ad7f';
})

numbers3.addEventListener("click", () => {
    numbers1.style.background = 'white';
    numbers2.style.background = 'white';
    numbers3.style.background = '#d3ad7f';
})

munobars.addEventListener("click", () => {

})

serchsimgs.addEventListener("click", () => {
    inputssechs.style.display = 'block';
    inputssechs.style.transition = '0.60s';
    clossech.style.position = 'relative';
    clossech.style.right = '50px';
    clossech.style.top = '5px';
    shops.style.display = 'none';
    boxserch.style.display = 'block';
    serchsimgs.style.display = 'none';
    clossech.style.display = 'block';

});

clossech.addEventListener("click", () => {
    inputssechs.style.display = 'none';
    inputssechs.style.transition = '0.60s';
    clossech.style.position = 'relative';
    clossech.style.right = '50px';
    clossech.style.top = '5px';
    shops.style.display = 'block';
    boxserch.style.display = 'none';
    serchsimgs.style.display = 'block';
    clossech.style.display = 'none';
    lodedsimgs.style.display = 'none';
})

closeserchbox.addEventListener("click", () => {
    boxserch.style.display = 'none';
    inputssechs.style.display = 'none';
    shops.style.display = 'block';
    serchsimgs.style.position = 'relative';
    serchsimgs.style.right = '0';
    serchsimgs.style.top = '0';
})

// serch filter
inputssechs.addEventListener("input", (inputss) => {
    // console.log(inputss.target.value);
    filterss.serchItems = inputss.target.value;
    randomeFilters(allProdocts, filterss);
    lodedsimgs.style.display = 'block';
})

showSlides(slideIndex);




// to funtions 
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
}

// to serch filter
function randomeFilters(sech, filterss) {
    const filterprocdocts = sech.filter((itmes) => {
        return itmes.titel.toLowerCase().includes(filterss.serchItems.toLowerCase());
    });

    boxserch.innerHTML = "";
    filterprocdocts.forEach((ite) => {
        const cretsdivs = document.createElement("div");
        cretsdivs.classList.add('items-carts');
        cretsdivs.innerHTML = ` <img src="${ite.imgs}" alt="" class="imgs-prodocts-items">
        <h1>${ite.titel}</h1>
        <ins class="mypriecstotak">$ 14.77</ins><br>
        <div class="link-items" 
        
    >

        </div>
       
        <img src="../images/add.png" data-id="${ite.id}"  class="imgs-add">
        `;
        boxserch.appendChild(cretsdivs);
    });


};




// arry of objects 
let items = [
    {
        id: 1,
        imgs: '../images/menu-1.png',
        titels: 'CAFEE STOP',
        priecs: '$ 12.44',
    },

    {
        id: 2,
        imgs: '../images/menu-2.png',
        titels: 'DES TRIGE',
        priecs: '$ 13.24',
    },

    {
        id: 3,
        imgs: '../images/menu-3.png',
        titels: 'BLOCK CAFEE',
        priecs: '$ 66.87',
    },

];


let pro = [
    {
        id: 112,
        imgs: '../images/cafee1.jpg',
        titels: 'CAFEE STOP',
        priecs: '$ 12.44',
        tite: 'is a cafee ross',
    },

    {
        id: 2,
        imgs: '../images/cafee2.jpg',
        titels: 'DES TRIGE',
        priecs: '$ 13.24',
        tite: 'is a flos cafee',
    },

    {
        id: 3,
        imgs: '../images/cafee5.jpg',
        titels: 'BLOCK CAFEE',
        priecs: '$ 66.87',
        tite: 'is a rooms cafee',
    },
    {
        id: 4,
        imgs: '../images/cafee6.jpg',
        titels: 'CyfdE STOP',
        priecs: '$ 2.44',
        tite: 'is a ca roms',
    },

    {
        id: 5,
        imgs: '../images/blog-1.jpeg',
        titels: 'DES TRIGE',
        priecs: '$ 7.264',
        tite: 'is a goos vors',
    },

    {
        id: 6,
        imgs: '../images/cafee7.jpg',
        titels: 'BLOCK CAFEE',
        priecs: '$ 46.87',
        tite: 'is a rooms cafee',
    },

];


let pro2 = [
    {
        id: 1,
        imgs: '../images/blog-1.jpeg',
        titels: 'CAFEE STOP',
        priecs: '$ 2.24',
        kaka: '60k'
    },

    {
        id: 2,
        imgs: '../images/cafee2.jpg',
        titels: 'DES TRIGE',
        priecs: '$ 13.24',
        kaka: '20k'
    },

    {
        id: 3,
        imgs: '../images/cafee6.jpg',
        titels: 'BLOCK CAFEE',
        priecs: '$ 66.87',
        kaka: '15k'
    },
];


let pro4 = [
     {
      id : 1,
      titel: "cage store",
      imgs : "../images/menu-1.png",
      priecs: '2.88 $'
    },

    {
      id : 2,
      titel: "flod cloes",
      imgs : "../images/menu-2.png",
      priecs: '2.88 $'
    },

    {
      id : 3,
      titel: "cafes mynis",
      imgs : "../images/menu-3.png" ,
      priecs: '2.88 $'
    },
    {
      id : 4,
      titel: "hold gryo",
      imgs : "../images/menu-4.png",
      priecs: '2.88 $'
    },

    {
      id : 5,
      titel: "cafess dff",
      imgs : "../images/menu-5.png",
      priecs: '2.88 $'
    },

    {
      id : 6,
      titel: "modes code",
      imgs : "../images/menu-6.png" ,
      priecs: '2.88 $'
    }
  
]