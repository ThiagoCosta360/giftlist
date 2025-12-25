import './polyfills.server.mjs';
import {
  CommonModule,
  NgForOf,
  bootstrapApplication,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-ZHV2UOIK.mjs";

// src/app/app.component.ts
function AppComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementStart(3, "div", 21)(4, "p", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "div", 24)(8, "a", 25)(9, "button", 26);
    \u0275\u0275text(10, " Comprar ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "small", 27);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const gift_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", gift_r1.img, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(gift_r1.description);
    \u0275\u0275advance(3);
    \u0275\u0275propertyInterpolate("href", gift_r1.pixurl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(gift_r1.price);
  }
}
var _AppComponent = class _AppComponent {
  constructor() {
    this.giftlist = [
      {
        img: "assets/cafeteira.jpg",
        description: "M\xE1quina de Caf\xE9 Expresso pra fazer hora extra",
        price: "R$ 400,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/6602125e-26a5-4982-a3e4-f106701a2338"
      },
      {
        img: "assets/cortina.jpg",
        description: "Cortina da sala pra dormir at\xE9 mais tarde",
        price: "R$ 128,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/660212c2-c2dd-46b2-bbf7-c1aede45298a"
      },
      {
        img: "assets/ferramentas.jpg",
        description: "Kit de Ferramentas pra n\xE3o depender de ningu\xE9m",
        price: "R$ 153,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021304-58e5-431b-8ff9-47259dac34f2"
      },
      {
        img: "assets/cama.jpg",
        description: "Conjunto de cama pras visitas n\xE3o morrerem de frio",
        price: "R$ 67,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/6602134c-0cc2-43c6-901f-79ec51371830"
      },
      {
        img: "assets/potes.jpg",
        description: "Kit tupperware pra fazer o rancho em dia de festa do sidi",
        price: "R$ 51,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021381-80e4-44de-9f0f-0d7a54ece94f"
      },
      {
        img: "assets/cadeira.jpg",
        description: "Cadeira de escrit\xF3rio pra n\xE3o ficar com dor nas costas",
        price: "R$ 280,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/660213e7-8f1b-4f18-a643-71e16ce5a615"
      },
      {
        img: "assets/relogio.jpg",
        description: "Rel\xF3gio de parede pra n\xE3o perder a hora de ir trabalhar",
        price: "R$ 46,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/6602141c-225f-46c5-9005-6c982ec9612a"
      },
      {
        img: "assets/planta.jpg",
        description: "Planta artificial porque a gente n\xE3o tem tempo pra cuidar",
        price: "R$ 35,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021464-6128-4c75-8851-d3e269652396"
      },
      {
        img: "assets/retrato.jpg",
        description: "Porta retratos pra n\xE3o esquecer a familia",
        price: "R$ 80,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021491-3997-40ce-816e-2d76d717d4b5"
      },
      {
        img: "assets/roteador.jpg",
        description: "Um m\xEAs de fibra otica porque depois disso tu se vira",
        price: "R$ 100,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/660214db-ac71-469f-9e8e-e946b26afe14"
      },
      {
        img: "assets/vinho.jpg",
        description: "Kit de vinhos pra receber os amigos",
        price: "R$ 202,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021502-05fb-49f2-822d-dc0b76b783d3"
      },
      {
        img: "assets/luminario.jpg",
        description: "Lumin\xE1ria de mesa pra trabalhar depois do hor\xE1rio",
        price: "R$ 97,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/6602152b-81e7-4aeb-be1a-5cfc52ebfecc"
      },
      {
        img: "assets/ventilador.jpg",
        description: "Ventilador para os dias quentes",
        price: "R$ 141,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021561-e184-4f0c-b766-761341290a93"
      },
      {
        img: "assets/sad.jpg",
        description: "Nem gosto tanto assim de ti...",
        price: "R$ 1,99",
        pixurl: "https://nubank.com.br/cobrar/q8h3/66021589-57d2-4766-a1a2-2229d8dea3cd"
      },
      {
        img: "assets/panelas.jpg",
        description: "Jogo de Panelas Tramontina (Vale 01 Jantar no Apartamento)",
        price: "R$ 515,00",
        pixurl: "https://nubank.com.br/cobrar/q8h3/660215b4-1eaf-498f-ba74-e9a06e26c694"
      }
    ];
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 1, consts: [[1, "body", "text-center"], [1, "cover-container", "d-flex", "h-100", "p-3", "mx-auto", "flex-column"], [1, "masthead", "mb-auto"], [1, "inner"], [1, "masthead-brand"], [1, "nav", "nav-masthead", "justify-content-center"], ["href", "#", 1, "nav-link", "active"], ["href", "#gifts", 1, "nav-link"], ["role", "main", 1, "inner", "cover"], [1, "cover-heading"], [1, "lead"], ["href", "#gifts", 1, "btn", "btn-lg", "btn-secondary"], [1, "mastfoot", "mt-auto"], ["id", "gifts", 1, "mt-auto"], [1, "album", "py-5"], [1, "container"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "card", "mb-4", "box-shadow"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-text"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "btn-group"], ["target", "_blank", 1, "btn", "btn-sm", "btn-outline-secondary", 3, "href"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-secondary"], [1, "text-muted"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "header", 2)(3, "div", 3)(4, "h3", 4);
    \u0275\u0275text(5, "Bianca");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "nav", 5)(7, "a", 6);
    \u0275\u0275text(8, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 7);
    \u0275\u0275text(10, "Lista de presentes");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(11, "main", 8)(12, "h1", 9);
    \u0275\u0275text(13, "Querida fam\xEDlia e amigos!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 10);
    \u0275\u0275text(15, " Tenho a alegria imensa em convid\xE1-los para o meu Ch\xE1 de Casa Nova! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 10);
    \u0275\u0275text(17, " Finalmente depois de tanta espera e ansiedade vou recebi as chaves do ap\xEA, mas ele s\xF3 vai se tornar um verdadeiro lar quando eu puder ench\xEA-lo com a alegria e o afeto de quem tanto amo. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p", 10);
    \u0275\u0275text(19, " Conto com voc\xEAs para dar o pontap\xE9 inicial nessa nova fase!! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 10);
    \u0275\u0275text(21, " Mal posso esperar para comemorar este novo come\xE7o ao lado de voc\xEAs. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 10);
    \u0275\u0275text(23, " Dia 03/01, a partir das 19h. Churrasqueira 4 - Cond. Conquista Rio Negro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 10);
    \u0275\u0275text(25, " Com carinho, Bianca. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 10)(27, "a", 11);
    \u0275\u0275text(28, "Lista de presentes");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(29, "footer", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementStart(30, "div", 13)(31, "div", 14)(32, "div", 15)(33, "div", 16);
    \u0275\u0275template(34, AppComponent_div_34_Template, 13, 4, "div", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(34);
    \u0275\u0275property("ngForOf", ctx.giftlist);
  }
}, dependencies: [CommonModule, NgForOf], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 10 });
})();

// src/app/app.routes.ts
var routes = [];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-4HESBOOJ.mjs.map
