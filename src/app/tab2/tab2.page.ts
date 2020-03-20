import { Component, OnInit } from '@angular/core';
import { StorageService } from "../services/storage.service";
import { Router, NavigationExtras } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    locates: any = null;
    locatesFiltred: any = null;

    constructor(private storage: StorageService, private router: Router, private alert: AlertController) {}

    ngOnInit()
    {
        let atualizandoAlert = this.alert.create({
            backdropDismiss: false,
            message: "Atualizando Dados...",
            keyboardClose: false
        })        
        atualizandoAlert.then((a) => a.present())

        this.storage.loadData()
            .then(()=>{
                atualizandoAlert.then((a) => a.dismiss())
                this.getLocates()
            })
                .catch(()=>{
                atualizandoAlert.then((a) => a.dismiss())
            })
    }

    getLocates()
    {

        this.locatesFiltred = null

        this.storage.get("world")
            .then(
                (data:any) => {

                    if(data != null){
                        data.values.forEach(locate => {
                            switch (locate.uid) {
                                case 'AF':
                                locate.name = 'Afeganistão';
                                break;
                                case 'CL':
                                    locate.name = 'Chile';
                                    break;
                                case 'ZA':
                                    locate.name = 'Africa do Sul';
                                    break;
                                case 'CN':
                                    locate.name = 'China';
                                    break;
                                case 'AL':
                                    locate.name = 'Albânia';
                                    break;
                                case 'CY':
                                    locate.name = 'Chipre';
                                    break;
                                case 'DE':
                                    locate.name = 'Alemanha';
                                    break;
                                case 'CO':
                                    locate.name = 'Colômbia';
                                    break;
                                case 'AD':
                                    locate.name = 'Andorra';
                                    break;
                                case 'KM':
                                    locate.name = 'Comores';
                                    break;
                                case 'AO':
                                    locate.name = 'Angola';
                                    break;
                                case 'CG':
                                    locate.name = 'Congo';
                                    break;
                                case 'AI':
                                    locate.name = 'Anguilla';
                                    break;
                                case 'CI':
                                    locate.name = 'Costa do Marfim';
                                    break;
                                case 'AQ':
                                    locate.name = 'Antartica';
                                    break;
                                case 'CR':
                                    locate.name = 'Costa Rica';
                                    break;
                                case 'AG':
                                    locate.name = 'Antígua e Barbuda';
                                    break;
                                case 'HR':
                                    locate.name = 'Croácia';
                                    break;
                                case 'AN':
                                    locate.name = 'Antilhas Holandesas';
                                    break;
                                case 'CU':
                                    locate.name = 'Cuba';
                                    break;
                                case 'SA':
                                    locate.name = 'Arábia Saudita';
                                    break;
                                case 'DK':
                                    locate.name = 'Dinamarca';
                                    break;
                                case 'DZ':
                                    locate.name = 'Argélia';
                                    break;
                                case 'DJ':
                                    locate.name = 'Djibuti';
                                    break;
                                case 'AR':
                                    locate.name = 'Argentina';
                                    break;
                                case 'DM':
                                    locate.name = 'Dominica';
                                    break;
                                case 'AM':
                                    locate.name = 'Armênia';
                                    break;
                                case 'EG':
                                    locate.name = 'Egito';
                                    break;
                                case 'AW':
                                    locate.name = 'Aruba';
                                    break;
                                case 'SV':
                                    locate.name = 'El Salvador';
                                    break;
                                case 'AU':
                                    locate.name = 'Austrália';
                                    break;
                                case 'AE':
                                    locate.name = 'Emirados Árabes Unidos';
                                    break;
                                case 'AT':
                                    locate.name = 'Áustria ';
                                    break;
                                case 'EC':
                                    locate.name = 'Equador';
                                    break;
                                case 'AZ':
                                    locate.name = 'Azerbaidjão';
                                    break;
                                case 'ER':
                                    locate.name = 'Eritréia';
                                    break;
                                case 'BS':
                                    locate.name = 'Bahamas';
                                    break;
                                case 'EM':
                                    locate.name = 'Escritório para Harmonização no Mercado Interno';
                                    break;
                                case 'BD':
                                    locate.name = 'Bangladesh';
                                    break;
                                case 'SK':
                                    locate.name = 'Eslováquia';
                                    break;
                                case 'BB':
                                    locate.name = 'Barbados';
                                    break;
                                case 'SI':
                                    locate.name = 'Eslovenia';
                                    break;
                                case 'BH':
                                    locate.name = 'Bareine';
                                    break;
                                case 'ES':
                                    locate.name = 'Espanha';
                                    break;
                                case 'BY':
                                    locate.name = 'Belarus';
                                    break;
                                case 'US':
                                    locate.name = 'Estados Unidos da América';
                                    break;
                                case 'BE':
                                    locate.name = 'Bélgica';
                                    break;
                                case 'EE':
                                    locate.name = 'Estônia';
                                    break;
                                case 'BZ':
                                    locate.name = 'Belize';
                                    break;
                                case 'ET':
                                    locate.name = 'Etiópia';
                                    break;
                                case 'BX':
                                    locate.name = 'Benelux';
                                    break;
                                case 'RU':
                                    locate.name = 'Federação Russa';
                                    break;
                                case 'BJ':
                                    locate.name = 'Benin';
                                    break;
                                case 'FJ':
                                    locate.name = 'Fiji';
                                    break;
                                case 'BM':
                                    locate.name = 'Bermudas';
                                    break;
                                case 'PH':
                                    locate.name = 'Filipinas';
                                    break;
                                case 'BO':
                                    locate.name = 'Bolívia';
                                    break;
                                case 'FI':
                                    locate.name = 'Finlândia';
                                    break;
                                case 'BA':
                                    locate.name = 'Bósnia e Herzegóvina';
                                    break;
                                case 'FR':
                                    locate.name = 'França';
                                    break;
                                case 'BW':
                                    locate.name = 'Botswana';
                                    break;
                                case 'GA':
                                    locate.name = 'Gabão';
                                    break;
                                case 'BR':
                                    locate.name = 'Brasil';
                                    break;
                                case 'GM':
                                    locate.name = 'Gambia';
                                    break;
                                case 'BG':
                                    locate.name = 'Bulgária';
                                    break;
                                case 'GE':
                                    locate.name = 'Geórgia';
                                    break;
                                case 'BN':
                                    locate.name = 'Brunei Darussalam';
                                    break;
                                case 'GH':
                                    locate.name = 'Gana';
                                    break;
                                case 'BF':
                                    locate.name = 'Burkina Faso';
                                    break;
                                case 'GS':
                                    locate.name = 'Geórgia do Sul e Ilhas Sandwich do Sul';
                                    break;
                                case 'BI':
                                    locate.name = 'Burundi';
                                    break;
                                case 'GI':
                                    locate.name = 'Gibraltar';
                                    break;
                                case 'BT':
                                    locate.name = 'Butão';
                                    break;
                                case 'GD':
                                    locate.name = 'Granada';
                                    break;
                                case 'CV':
                                    locate.name = 'Cabo Verde';
                                    break;
                                case 'GR':
                                    locate.name = 'Grécia';
                                    break;
                                case 'CM':
                                    locate.name = 'Camarões';
                                    break;
                                case 'GL':
                                    locate.name = 'Groenlândia';
                                    break;
                                case 'KH':
                                    locate.name = 'Camboja';
                                    break;
                                case 'GP':
                                    locate.name = 'Guadalupe';
                                    break;
                                case 'CA':
                                    locate.name = 'Canadá';
                                    break;
                                case 'GU':
                                    locate.name = 'Guam';
                                    break;
                                case 'QA':
                                    locate.name = 'Catar';
                                    break;
                                case 'GT':
                                    locate.name = 'Guatemala';
                                    break;
                                case 'KZ':
                                    locate.name = 'Cazaquistão';
                                    break;
                                case 'GY':
                                    locate.name = 'Guiana';
                                    break;
                                case 'TD':
                                    locate.name = 'Chade';
                                    break;
                                case 'GN':
                                    locate.name = 'Guine';
                                    break;
                                case 'GW':
                                    locate.name = 'Guiné Bissau';
                                    break;
                                case 'JO':
                                    locate.name = 'Jordânia';
                                    break;
                                case 'GQ':
                                    locate.name = 'Guine Equatorial';
                                    break;
                                case 'KI':
                                    locate.name = 'Kiribati';
                                    break;
                                case 'HT':
                                    locate.name = 'Haiti';
                                    break;
                                case 'KW':
                                    locate.name = 'Kuwait';
                                    break;
                                case 'NL':
                                    locate.name = 'Holanda';
                                    break;
                                case 'LA':
                                    locate.name = 'Laos';
                                    break;
                                case 'HN':
                                    locate.name = 'Honduras';
                                    break;
                                case 'LS':
                                    locate.name = 'Lesoto';
                                    break;
                                case 'HK':
                                    locate.name = 'Hong-Kong';
                                    break;
                                case 'LV':
                                    locate.name = 'Letônia';
                                    break;
                                case 'HU':
                                    locate.name = 'Hungria';
                                    break;
                                case 'LB':
                                    locate.name = 'Líbano';
                                    break;
                                case 'YE':
                                    locate.name = 'Iêmen';
                                    break;
                                case 'LR':
                                    locate.name = 'Libéria';
                                    break;
                                case 'BV':
                                    locate.name = 'Ilha Bouvet';
                                    break;
                                case 'LY':
                                    locate.name = 'Líbia';
                                    break;
                                case 'IM':
                                    locate.name = 'Ilha do Homem';
                                    break;
                                case 'LI':
                                    locate.name = 'Liechtenstein';
                                    break;
                                case 'CX':
                                    locate.name = 'Ilha Natal';
                                    break;
                                case 'LT':
                                    locate.name = 'Lituânia';
                                    break;
                                case 'NF':
                                    locate.name = 'Ilha Norfalk';
                                    break;
                                case 'LU':
                                    locate.name = 'Luxemburgo';
                                    break;
                                case 'KY':
                                    locate.name = 'Ilhas Cayman';
                                    break;
                                case 'MO':
                                    locate.name = 'Macau';
                                    break;
                                case 'CC':
                                    locate.name = 'Ilhas Cocos';
                                    break;
                                case 'MG':
                                    locate.name = 'Madagascar';
                                    break;
                                case 'CK':
                                    locate.name = 'Ilhas Cook';
                                    break;
                                case 'MY':
                                    locate.name = 'Malásia';
                                    break;
                                case 'GG':
                                    locate.name = 'Ilhas do Canal';
                                    break;
                                case 'MW':
                                    locate.name = 'Malawi';
                                    break;
                                case 'FO':
                                    locate.name = 'Ilhas Faroe';
                                    break;
                                case 'MV':
                                    locate.name = 'Maldivas';
                                    break;
                                case 'HM':
                                    locate.name = 'Ilhas Heard e McDonald';
                                    break;
                                case 'ML':
                                    locate.name = 'Mali';
                                    break;
                                case 'FK':
                                    locate.name = 'Ilhas Malvinas';
                                    break;
                                case 'MT':
                                    locate.name = 'Malta';
                                    break;
                                case 'MP':
                                    locate.name = 'Ilhas Marianas do Norte';
                                    break;
                                case 'MA':
                                    locate.name = 'Marrocos';
                                    break;
                                case 'MH':
                                    locate.name = 'Ilhas Marshall';
                                    break;
                                case 'MQ':
                                    locate.name = 'Martinica';
                                    break;
                                case 'UM':
                                    locate.name = 'Ilhas Menores';
                                    break;
                                case 'MU':
                                    locate.name = 'Maurício';
                                    break;
                                case 'SB':
                                    locate.name = 'Ilhas Salomão';
                                    break;
                                case 'MR':
                                    locate.name = 'Mauritânia';
                                    break;
                                case 'TC':
                                    locate.name = 'Ilhas Turks e Caicos';
                                    break;
                                case 'MX':
                                    locate.name = 'México';
                                    break;
                                case 'VG':
                                    locate.name = 'Ilhas Virgens (Britânicas)';
                                    break;
                                case 'MM':
                                    locate.name = 'Mianmá';
                                    break;
                                case 'VI':
                                    locate.name = 'Ilhas Virgens (U.S.)';
                                    break;
                                case 'FM':
                                    locate.name = 'Micronésia';
                                    break;
                                case 'WF':
                                    locate.name = 'Ilhas Wallis e Futura';
                                    break;
                                case 'MZ':
                                    locate.name = 'Moçambique';
                                    break;
                                case 'IN':
                                    locate.name = 'India';
                                    break;
                                case 'MC':
                                    locate.name = 'Mônaco';
                                    break;
                                case 'ID':
                                    locate.name = 'Indonésia';
                                    break;
                                case 'MN':
                                    locate.name = 'Mongólia';
                                    break;
                                case 'IR':
                                    locate.name = 'Irã';
                                    break;
                                case 'MS':
                                    locate.name = 'Mont Serrat';
                                    break;
                                case 'IQ':
                                    locate.name = 'Iraque';
                                    break;
                                case 'ME':
                                    locate.name = 'Montenegro';
                                    break;
                                case 'IE':
                                    locate.name = 'Irlanda';
                                    break;
                                case 'NA':
                                    locate.name = 'Namíbia';
                                    break;
                                case 'IS':
                                    locate.name = 'Islândia';
                                    break;
                                case 'NR':
                                    locate.name = 'Nauru';
                                    break;
                                case 'IL':
                                    locate.name = 'Israel';
                                    break;
                                case 'NP':
                                    locate.name = 'Nepal';
                                    break;
                                case 'ID':
                                    locate.name = 'Indonésia';
                                    break;
                                case 'NI':
                                    locate.name = 'Nicarágua';
                                    break;
                                case 'IR':
                                    locate.name = 'Irã';
                                    break;
                                case 'NE':
                                    locate.name = 'Níger';
                                    break;
                                case 'IQ':
                                    locate.name = 'Iraque';
                                    break;
                                case 'NG':
                                    locate.name = 'Nigéria';
                                    break;
                                case 'IE':
                                    locate.name = 'Irlanda';
                                    break;
                                case 'NO':
                                    locate.name = 'Noruega';
                                    break;
                                case 'IS':
                                    locate.name = 'Islândia';
                                    break;
                                case 'NC':
                                    locate.name = 'Nova Caledônia';
                                    break;
                                case 'IL':
                                    locate.name = 'Israel';
                                    break;
                                case 'NZ':
                                    locate.name = 'Nova Zelândia';
                                    break;
                                case 'IT':
                                    locate.name = 'Itália';
                                    break;
                                case 'OM':
                                    locate.name = 'Omã';
                                    break;
                                case 'JM':
                                    locate.name = 'Jamaica';
                                    break;
                                case 'OA':
                                    locate.name = 'Organização Africana de Propriedade Intelectual (OAPI)';
                                    break;
                                case 'JP':
                                    locate.name = 'Japão';
                                    break;
                                case 'WO':
                                    locate.name = 'Organização Mundial de Propriedade Intelectual – OMPI (WIPO)';
                                    break;
                                case 'JE':
                                    locate.name = 'Jersey';
                                    break;
                                case 'AP':
                                    locate.name = 'Organização Regional de Propriedade Industrial Africana';
                                    break;
                                case 'PW':
                                    locate.name = 'Palau';
                                    break;
                                case 'SE':
                                    locate.name = 'Suécia';
                                    break;
                                case 'PA':
                                    locate.name = 'Panamá';
                                    break;
                                case 'CH':
                                    locate.name = 'Suíça';
                                    break;
                                case 'PG':
                                    locate.name = 'Papua Nova Guiné';
                                    break;
                                case 'SR':
                                    locate.name = 'Suriname';
                                    break;
                                case 'PK':
                                    locate.name = 'Paquistão';
                                    break;
                                case 'SJ':
                                    locate.name = 'Svalbard e Jan Mayen';
                                    break;
                                case 'PY':
                                    locate.name = 'Paraguai';
                                    break;
                                case 'TJ':
                                    locate.name = 'Tadjiquistão';
                                    break;
                                case 'PE':
                                    locate.name = 'Peru';
                                    break;
                                case 'TH':
                                    locate.name = 'Tailândia';
                                    break;
                                case 'PN':
                                    locate.name = 'Pitcairn';
                                    break;
                                case 'TW':
                                    locate.name = 'Taiwan';
                                    break;
                                case 'PF':
                                    locate.name = 'Polinésia Francesa';
                                    break;
                                case 'TF':
                                    locate.name = 'Terras Austrais Francesas';
                                    break;
                                case 'PL':
                                    locate.name = 'Polônia';
                                    break;
                                case 'IO':
                                    locate.name = 'Territ.Britan.Oceano Índico';
                                    break;
                                case 'PR':
                                    locate.name = 'Porto Rico';
                                    break;
                                case 'PS':
                                    locate.name = 'Território Ocupado Palestino';
                                    break;
                                case 'PT':
                                    locate.name = 'Portugal';
                                    break;
                                case 'TL':
                                    locate.name = 'Timor-Leste';
                                    break;
                                case 'KE':
                                    locate.name = 'Quênia';
                                    break;
                                case 'TG':
                                    locate.name = 'Togo';
                                    break;
                                case 'KG':
                                    locate.name = 'Quirguistão';
                                    break;
                                case 'TK':
                                    locate.name = 'Tokelau';
                                    break;
                                case 'GB':
                                    locate.name = 'Reino Unido';
                                    break;
                                case 'TO':
                                    locate.name = 'Tonga';
                                    break;
                                case 'CF':
                                    locate.name = 'República Centro Africana';
                                    break;
                                case 'TT':
                                    locate.name = 'Trinidad e Tobago';
                                    break;
                                case 'KR':
                                    locate.name = 'República da Coréia';
                                    break;
                                case 'TN':
                                    locate.name = 'Tunísia';
                                    break;
                                case 'MK':
                                    locate.name = 'República da Macedonia';
                                    break;
                                case 'TM':
                                    locate.name = 'Turcomenistão';
                                    break;
                                case 'MD':
                                    locate.name = 'República da Moldova';
                                    break;
                                case 'TR':
                                    locate.name = 'Turquia';
                                    break;
                                case 'CD':
                                    locate.name = 'República Dem. Do Congo';
                                    break;
                                case 'TV':
                                    locate.name = 'Tuvalu';
                                    break;
                                case 'DO':
                                    locate.name = 'República Dominicana';
                                    break;
                                case 'UA':
                                    locate.name = 'Ucrânia';
                                    break;
                                case 'KP':
                                    locate.name = 'República Pop. Dem. da Coreia';
                                    break;
                                case 'UG':
                                    locate.name = 'Uganda';
                                    break;
                                case 'CZ':
                                    locate.name = 'República Tcheca';
                                    break;
                                case 'UY':
                                    locate.name = 'Uruguai';
                                    break;
                                case 'TZ':
                                    locate.name = 'República Unida da Tanzânia';
                                    break;
                                case 'UZ':
                                    locate.name = 'Uzbequistão';
                                    break;
                                case 'RE':
                                    locate.name = 'Reunião';
                                    break;
                                case 'VU':
                                    locate.name = 'Vanuatu';
                                    break;
                                case 'RO':
                                    locate.name = 'Romênia';
                                    break;
                                case 'VA':
                                    locate.name = 'Vaticano';
                                    break;
                                case 'RW':
                                    locate.name = 'Ruanda';
                                    break;
                                case 'VE':
                                    locate.name = 'Venezuela';
                                    break;
                                case 'EH':
                                    locate.name = 'Saara Ocidental';
                                    break;
                                case 'VN':
                                    locate.name = 'Vietnã';
                                    break;
                                case 'PM':
                                    locate.name = 'Saint Pierre e Miquelon';
                                    break;
                                case 'YU':
                                    locate.name = 'Yugoslávia';
                                    break;
                                case 'AS':
                                    locate.name = 'Samoa Americana';
                                    break;
                                case 'ZR':
                                    locate.name = 'Zaire';
                                    break;
                                case 'WS':
                                    locate.name = 'Samoa Ocidental';
                                    break;
                                case 'ZM':
                                    locate.name = 'Zâmbia';
                                    break;
                                case 'SH':
                                    locate.name = 'Santa Helena';
                                    break;
                                case 'ZW':
                                    locate.name = 'Zimbábue';
                                    break;
                                case 'LC':
                                    locate.name = 'Santa Lúcia';
                                    break;
                                case 'KN':
                                    locate.name = 'São Cristovão e Nevis';
                                    break;
                                case 'SM':
                                    locate.name = 'São Marino';
                                    break;
                                case 'ST':
                                    locate.name = 'São Tomé e Príncipe';
                                    break;
                                case 'VC':
                                    locate.name = 'São Vicente e Granadinas';
                                    break;
                                case 'SN':
                                    locate.name = 'Senegal';
                                    break;
                                case 'SL':
                                    locate.name = 'Serra Leoa';
                                    break;
                                case 'RS':
                                    locate.name = 'Sérvia';
                                    break;
                                case 'SC':
                                    locate.name = 'Seychelles';
                                    break;
                                case 'SG':
                                    locate.name = 'Singapura';
                                    break;
                                case 'SY':
                                    locate.name = 'Síria';
                                    break;
                                case 'SO':
                                    locate.name = 'Somália';
                                    break;
                                case 'LK':
                                    locate.name = 'Sri Lanka';
                                    break;
                                case 'SZ':
                                    locate.name = 'Suazilândia';
                                    break;
                                case 'SD':
                                    locate.name = 'Sudão';
                                    break;
                            }
                            if(!locate.hasOwnProperty('deaths')){
                                locate.deaths = 0;
                            }
                            if(!locate.hasOwnProperty('cases')){
                            locate.cases = 0;
                            }    
                            
                            if(!locate.hasOwnProperty('suspects')){
                            locate.suspects = 0;
                            }   
                    
                            if(!locate.hasOwnProperty('refuses')){
                            locate.refuses = 0;
                            }   
                        });

                        this.locates = data
                        this.locatesFiltred = data.values
                    }else{
                        this.alert.create({
                            header: "Atenção",
                            message: "É necessário conexão com Internet",
                            buttons: ['OK']
                        }).then((a)=>{ a.present() })                        
                    }
                }
            )
    }

    readLocate()
    {
        return this.locates
    }

    clearLocates()
    {
        this.getLocates()
    }

    searchLocates(ev: any)
    {
        if(ev.target.value != ''){
            let locates = []
            this.locatesFiltred.forEach((locate)=>{
            if(!locate.hasOwnProperty('name')){
                if(this.removeAcentos(locate.name).toString().toLowerCase().indexOf(this.removeAcentos(ev.target.value).toString().toLowerCase()) > -1){
                locates.push(locate)
                }
            }
            })

            if(locates.length > 0)
            this.locatesFiltred = locates
            else
            this.locatesFiltred = this.locates.values 

        }else{
            this.locatesFiltred = this.locates.values
        }
    }

    removeAcentos(string)
    {
        var map={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E","é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o","Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"};
        return string.replace(/[\W\[\] ]/g,function(a){return map[a]||a})    
    }   

    openDetails(locate)
    {
        let navigation: NavigationExtras = {
            state: {
                locate: locate,
                type: 'world'
            }
        }
        this.router.navigate(['detail'], navigation)
    }    
}
