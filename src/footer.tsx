import React from 'react';

const Footer:React.FC = ()=>{
    return(
        <div className='px-6 pt-12 mt-12 pb-8 shadow-t'>
            <div className='flex flex-col lg:flex-row justify-evenly'>
                <div className='px-4'>
                    <div className='flex justify-between items-center cursor-pointer lg:cursor-default mb-3'>
                        <h3 className='text-xl font-medium my-3'>About Us</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden box-content rounded-full border-gray-300 hover:border-10 hover:bg-gray-300 hover:-mr-2.5 transition-border ease-out" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                    </div>
                    <div className='lg:flex flex-col space-y-6 mb-6 text-gray-500 hidden'>
                        <a className='hover:text-black' href='#'>Our Heritage</a>
                        <a className='hover:text-black' href='#'>Our Coffee</a>
                        <a className='hover:text-black' href='#'>Stories and News</a>
                        <a className='hover:text-black' href='#'>Investor Relations</a>
                        <a className='hover:text-black' href='#'>Policies and Standards</a>
                        <a className='hover:text-black' href='#'>Customer Service</a>
                    </div>
                </div>
                <div className='px-4'>
                    <div className='flex justify-between items-center cursor-pointer lg:cursor-default mb-3'>
                        <h3 className='text-xl font-medium my-3'>Careers</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden box-content rounded-full border-gray-300 hover:border-10 hover:bg-gray-300 hover:-mr-2.5 transition-border ease-out" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                    </div>
                    <div className='lg:flex flex-col space-y-6 mb-6 text-gray-500 hidden'>
                        <a className='hover:text-black' href='#'>Culture and Values</a>
                        <a className='hover:text-black' href='#'>Inclusion, Diversity, and Equity</a>
                        <a className='hover:text-black' href='#'>College Achievement Plan</a>
                        <a className='hover:text-black' href='#'>US Careers</a>
                        <a className='hover:text-black' href='#'>International Careers</a>
                    </div>
                </div>
                <div className='px-4'>
                    <div className='flex justify-between items-center cursor-pointer lg:cursor-default mb-3'>
                        <h3 className='text-xl font-medium my-3'>Social Impact</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden box-content rounded-full border-gray-300 hover:border-10 hover:bg-gray-300 hover:-mr-2.5 transition-border ease-out" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                    </div>
                    <div className='lg:flex flex-col space-y-6 mb-6 text-gray-500 hidden'>
                        <a className='hover:text-black' href='#'>Ethical Sourcing</a>
                        <a className='hover:text-black' href='#'>Leading in Sustainability</a>
                        <a className='hover:text-black' href='#'>Strengthening Communities</a>
                        <a className='hover:text-black' href='#'>Creating Oppurtinities</a>
                        <a className='hover:text-black' href='#'>Global Social Impact Report</a>
                    </div>
                </div>
                <div className='px-4'>
                    <div className='flex justify-between items-center cursor-pointer lg:cursor-default mb-3'>
                        <h3 className='text-xl font-medium my-3'>For Business Partners</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden box-content rounded-full border-gray-300 hover:border-10 hover:bg-gray-300 hover:-mr-2.5 transition-border ease-out" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                    </div>
                    <div className='lg:flex flex-col space-y-6 mb-6 text-gray-500 hidden'>
                        <a className='hover:text-black' href='#'>Landlord Support Center</a>
                        <a className='hover:text-black' href='#'>Suppliers</a>
                        <a className='hover:text-black' href='#'>Corporate Gift Card Sales</a>
                        <a className='hover:text-black' href='#'>Office and Foodservice Coffee</a>
                    </div>
                </div>
                <div className='px-4 lg:mr-12'>
                    <div className='flex justify-between items-center cursor-pointer lg:cursor-default mb-3'
                        >
                        <h3 className='text-xl font-medium my-3'>Order and Pickup</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:hidden box-content rounded-full border-gray-300 hover:border-10 hover:bg-gray-300 hover:-mr-2.5 transition-border ease-out" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                    </div>
                    <div className='lg:flex flex-col space-y-6 mb-6 text-gray-500 hidden'>
                        <a className='hover:text-black' href='#'>Order on the App</a>
                        <a className='hover:text-black' href='#'>Order on the Web</a>
                        <a className='hover:text-black' href='#'>Delivery</a>
                        <a className='hover:text-black' href='#'>Order and Pickup Options</a>
                        <a className='hover:text-black' href='#'>Explore and Find Coffee for Home</a>
                    </div>
                </div>
            </div>
            <hr className='border-t-2 mx-4 mb-8'/>
            <div className='flex justify-between mx-4 max-w-xs'>
                <div
                    className='border-gray-200 bg-gray-200 rounded-full hover:border-10 hover:-m-2.5 transition-border ease-in'>
                    <svg className='h-9 rounded-full' viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="currentColor"
                            d="M12,0 C18.6274131,0 24,5.37261901 24,12.0000716 C24,18.627381 18.6274131,24 12,24 C5.37258694,24 0,18.627381 0,12.0000716 C0,5.37261901 5.37258694,0 12,0 Z M11.0669976,14 C9.95068692,14.0009568 8.6027256,14.1878544 7.49869423,14.4956294 C7.1391459,14.5957759 6.94143571,14.9349663 7.01538732,15.323911 C7.08630361,15.6969088 7.39839046,15.9206437 7.74883281,15.8300653 C8.54008748,15.6259451 9.33810265,15.4781174 10.1468794,15.4098647 C11.1130794,15.3282166 12.0741744,15.3684028 13.0286469,15.5672606 C14.1176396,15.7941848 15.1397171,16.2280998 16.0883949,16.8908526 C16.3912378,17.1024678 16.747061,16.996421 16.9174532,16.6588253 C17.0846722,16.3276084 16.9922326,15.9219194 16.6909074,15.7184371 C16.4242125,15.5382372 16.1546202,15.3615456 15.8770258,15.205585 C14.3588102,14.3530642 12.7453957,14.0017542 11.0669976,14 Z M10.1375115,11.0003442 L9.77055252,11.0048078 C8.68426674,11.0479717 7.61755495,11.2034929 6.57584646,11.49243 C6.14064634,11.6131584 5.91075895,11.9889467 6.03234638,12.3691822 C6.15507681,12.7528185 6.57698947,12.9458793 7.02147652,12.8358765 C7.38895345,12.7448397 7.75828776,12.6556341 8.1321941,12.5915421 C9.5848138,12.3422374 11.0434343,12.3367438 12.5037693,12.5345134 C14.0365424,12.7419621 15.4914481,13.1568596 16.8266238,13.8930018 C17.2083883,14.103459 17.6680202,13.9939794 17.8937642,13.6477519 C18.1073637,13.320098 17.9912056,12.8938209 17.614156,12.6938277 C17.2519655,12.5018134 16.8857744,12.313069 16.5065817,12.1523159 C14.6039028,11.3459341 12.5917809,11.001407 10.504792,11.0032382 C10.2600455,11.0032382 10.0148704,10.9949978 9.77055252,11.0048078 Z M11.0635356,7.01538228 C10.2184059,6.97905829 9.3745573,7.0079312 8.53227456,7.09284241 C7.5586031,7.1912587 6.59774312,7.36511712 5.66051317,7.67557859 C5.1689799,7.83857086 4.89609567,8.38560397 5.0370218,8.90997339 C5.18164902,9.44769266 5.68015742,9.75008213 6.17923521,9.59003924 C7.37155569,9.20770594 8.59405429,9.0489049 9.83078786,9.00947629 C11.1386962,8.96771922 12.4379213,9.07187905 13.7249043,9.33685791 C15.0971547,9.61953308 16.4163087,10.0659767 17.6311204,10.8388705 C17.7602315,10.9209876 17.918809,10.947532 18.0638633,11 C18.0668526,10.9917728 18.0701267,10.9835455 18.0732584,10.9753183 C18.1337569,10.9681777 18.195252,10.9664702 18.2544694,10.9528099 C18.6473544,10.8626208 18.9228009,10.5436216 18.9889935,10.1064919 C19.0467875,9.72508998 18.8742597,9.30969253 18.5354676,9.11099719 C18.0779559,8.84244802 17.6178819,8.57219131 17.1390177,8.35455782 C15.1965147,7.47176064 13.154794,7.1054161 11.0635356,7.01538228 Z">
                        </path>
                    </svg>
                </div>
                <div
                    className='border-gray-200 bg-gray-200 rounded-full hover:border-10 hover:-m-2.5 transition-border ease-in'>
                    <svg className='h-9 rounded-full' viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="currentColor"
                            d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M15.4043684,4.8 L12.7777895,4.8 C11.2364211,4.8 9.98636842,5.96104896 9.98636842,7.39365487 L9.98636842,9.44903723 L8.59515789,9.44903723 C8.48763158,9.44903723 8.4,9.53002017 8.4,9.6303686 L8.4,11.7623327 C8.4,11.862241 8.48763158,11.9432239 8.59515789,11.9432239 L9.98636842,11.9432239 L9.98636842,19.0186686 C9.98636842,19.1190171 10.074,19.2 10.1815263,19.2 L12.9639474,19.2 C13.0719474,19.2 13.1591053,19.1190171 13.1591053,19.0186686 L13.1591053,11.9432239 L15.1765263,11.9432239 C15.2778947,11.9432239 15.3626842,11.8714836 15.3707368,11.7772969 L15.5649474,9.64533284 C15.5748947,9.53970292 15.4844211,9.44903723 15.3702632,9.44903723 L13.1591053,9.44903723 L13.1591053,7.93632863 C13.1591053,7.58202824 13.4688947,7.29462681 13.8502105,7.29462681 L15.4043684,7.29462681 C15.5123684,7.29462681 15.6,7.21320374 15.6,7.11329543 L15.6,4.98133138 C15.6,4.88142307 15.5123684,4.8 15.4043684,4.8 Z">
                        </path>
                    </svg>
                </div>
                <div
                    className=' border-gray-200 bg-gray-200 rounded-full hover:border-10 hover:-m-2.5 transition-border ease-in'>
                    <svg className='h-9 rounded-full' viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="currentColor"
                            d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M16.7437635,9.80095875 C16.4076853,7.09999459 13.974973,5.72453915 11.3823151,6.04599103 C9.33308638,6.29999351 7.2896388,8.13734924 7.20446304,10.7614723 C7.15898457,12.1352202 7.45420918,13.2152643 8.40655904,13.7079011 C8.73839766,13.8799397 9.11455851,13.647282 9.1538704,13.2438663 C9.21707776,12.5937053 8.71874171,12.2918906 8.62315986,11.6344724 C8.11827183,8.17406221 12.2275208,5.81162572 14.3781126,8.22870476 C15.8661833,9.90298663 14.8864693,15.0504856 12.4865168,14.5160131 C10.1875419,14.0041661 13.6123015,9.9059749 11.7765903,9.10213176 C10.2854362,8.44855564 9.49303183,11.1017076 10.2002605,12.420386 C9.82795373,14.4553941 9.06985087,16.3845322 9.18046374,18.814845 C9.19780722,19.1905125 9.62831098,19.3377913 9.8410577,19.0449414 C10.5737235,18.0396038 10.8832083,16.5651088 11.1456729,15.0398132 C11.7349659,15.4359717 12.0506173,15.8487791 12.8017828,15.9128133 C15.5732712,16.14974 17.121466,12.8489885 16.7437635,9.80095875 Z">
                        </path>
                    </svg>
                </div>
                <div
                    className=' border-gray-200 bg-gray-200 rounded-full hover:border-10 hover:-m-2.5 transition-border ease-in'>
                    <svg className='h-9 rounded-full' viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="currentColor"
                            d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M15,5 L9,5 C6.790861,5 5,6.790861 5,9 L5,9 L5,15 C5,17.209139 6.790861,19 9,19 L9,19 L15,19 C17.209139,19 19,17.209139 19,15 L19,15 L19,9 C19,6.790861 17.209139,5 15,5 L15,5 Z M14.7647059,6.23529412 C16.4215601,6.23529412 17.7647059,7.57843987 17.7647059,9.23529412 L17.7647059,9.23529412 L17.7647059,14.7647059 L17.7596132,14.9409787 C17.6683668,16.5157859 16.3623868,17.7647059 14.7647059,17.7647059 L14.7647059,17.7647059 L9.23529412,17.7647059 L9.05902133,17.7596132 C7.48421408,17.6683668 6.23529412,16.3623868 6.23529412,14.7647059 L6.23529412,14.7647059 L6.23529412,9.23529412 L6.24038681,9.05902133 C6.33163324,7.48421408 7.63761323,6.23529412 9.23529412,6.23529412 L9.23529412,6.23529412 Z M11.7941176,8.70588235 C9.86112102,8.70588235 8.29411765,10.2728857 8.29411765,12.2058824 C8.29411765,14.138879 9.86112102,15.7058824 11.7941176,15.7058824 C13.7271143,15.7058824 15.2941176,14.138879 15.2941176,12.2058824 C15.2941176,10.2728857 13.7271143,8.70588235 11.7941176,8.70588235 Z M11.7941176,9.94117647 C13.0448802,9.94117647 14.0588235,10.9551198 14.0588235,12.2058824 C14.0588235,13.4566449 13.0448802,14.4705882 11.7941176,14.4705882 C10.5433551,14.4705882 9.52941176,13.4566449 9.52941176,12.2058824 C9.52941176,10.9551198 10.5433551,9.94117647 11.7941176,9.94117647 Z M15.7058824,7.47058824 C15.2510596,7.47058824 14.8823529,7.83929491 14.8823529,8.29411765 C14.8823529,8.74894038 15.2510596,9.11764706 15.7058824,9.11764706 C16.1607051,9.11764706 16.5294118,8.74894038 16.5294118,8.29411765 C16.5294118,7.83929491 16.1607051,7.47058824 15.7058824,7.47058824 Z">
                        </path>
                    </svg>
                </div>
                <div
                    className=' border-gray-200 bg-gray-200 rounded-full hover:border-10 hover:-m-2.5 transition-border ease-in'>
                    <svg className='h-9 rounded-full' viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="currentColor"
                            d="M11.9997802,0 C18.6169827,0 24,5.38345699 24,12.0002198 C24,18.6169827 18.6169827,24 11.9997802,24 C5.38301731,24 0,18.6169827 0,12.0002198 C0,5.38345699 5.38301731,0 11.9997802,0 Z M16.1700158,7 L8.82998416,7 C7.26701245,7 6,8.25308368 6,9.79887301 L6,13.201127 C6,14.7469163 7.26701245,16 8.82998416,16 L16.1700158,16 C17.7329875,16 19,14.7469163 19,13.201127 L19,9.79887301 C19,8.25308368 17.7329875,7 16.1700158,7 Z M11.3262463,9.28078768 L14.5709798,11.3486057 C14.7141036,11.4390048 14.689657,11.6696954 14.5443107,11.7571306 L11.3218015,13.7217059 C11.1822335,13.8056832 11.0555556,13.6925608 11.0555556,13.5162084 L11.0555556,9.4838152 C11.0555556,9.30499291 11.1857894,9.19236451 11.3262463,9.28078768 Z">
                        </path>
                    </svg>
                </div>
                <div
                    className=' border-gray-200 bg-gray-200 rounded-full hover:border-10 hover:-m-2.5 transition-border ease-in'>
                    <svg className='h-9 rounded-full' viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path fill="currentColor"
                            d="M11.9997256,5.63636363e-05 C18.6169281,5.63636363e-05 23.9999455,5.38351336 23.9999455,12.0002762 C23.9999455,18.6170391 18.6169281,24.0000564 11.9997256,24.0000564 C5.38296277,24.0000564 -5.4545455e-05,18.6170391 -5.4545455e-05,12.0002762 C-5.4545455e-05,5.38351336 5.38296277,5.63636363e-05 11.9997256,5.63636363e-05 Z M13.9328526,6.00566601 C13.5495281,6.03127502 13.1735596,6.14210744 12.8335533,6.32472904 C12.4927297,6.50777046 12.1882769,6.76218124 11.946758,7.0690695 C11.6958398,7.38645324 11.5111249,7.7613523 11.4167241,8.15892163 C11.3251839,8.5426369 11.3329485,8.92173415 11.3885264,9.30964762 C11.3971083,9.37388005 11.3913871,9.38269626 11.3349918,9.37388005 C9.19237982,9.04642063 7.41674584,8.25883873 5.9745796,6.57116325 C5.9120544,6.49769479 5.8781355,6.49769479 5.82705282,6.5766209 C5.19607955,7.54808386 5.50216697,9.10897377 6.2904749,9.8759845 C6.39550089,9.9780007 6.50297885,10.0804367 6.61944736,10.1736367 C6.57735523,10.1824529 6.0530426,10.124098 5.58553391,9.8759845 C5.5230087,9.83526198 5.49154177,9.85835207 5.48582051,9.93140071 C5.48009925,10.0363556 5.4890898,10.1329142 5.50298429,10.2471052 C5.62394808,11.2315825 6.28761427,12.1425914 7.19688598,12.497759 C7.3047726,12.544359 7.42410175,12.5855013 7.5401616,12.6056527 C7.33337891,12.6522527 7.12005763,12.6858382 6.52586389,12.6379788 C6.45189617,12.6232851 6.42369853,12.6614887 6.45189617,12.7341175 C6.89856313,13.983921 7.86218682,14.3558813 8.58347427,14.5678903 C8.67991837,14.5851029 8.77677113,14.5851029 8.87362389,14.6086128 C8.86749397,14.617429 8.86218137,14.617429 8.85646011,14.6262452 C8.6169845,15.0007245 7.78740177,15.2799046 7.40121671,15.4184451 C6.69831902,15.6711766 5.93289613,15.784528 5.18994963,15.7093802 C5.07102915,15.691328 5.04650946,15.6925874 5.0142252,15.7093802 C4.98153229,15.7299514 5.01013859,15.758919 5.0481441,15.7908253 C5.19894018,15.8932613 5.35218822,15.9839424 5.50870555,16.0712649 C5.98030086,16.3281946 6.47192058,16.5326468 6.98642534,16.6783243 C9.64190741,17.4319008 12.6333092,16.8781585 14.627577,14.8428722 C16.1935677,13.2446184 16.7424,11.0405645 16.7424,8.833572 C16.7424,8.74708913 16.8417047,8.69964949 16.9009607,8.65388914 C17.3083961,8.33944413 17.632056,7.96328561 17.9356914,7.54304602 C17.9906155,7.46747846 17.9987836,7.39862802 17.9998539,7.35648483 L17.9999455,7.31844244 C17.9999455,7.28317758 18.0043466,7.29367307 17.9512206,7.31844244 C17.5380639,7.5107199 17.0836323,7.62700997 16.6377827,7.70383699 C16.8494693,7.66731267 17.161278,7.27394155 17.2859197,7.11482985 C17.476356,6.87217402 17.634508,6.59551279 17.7231875,6.29660111 C17.7350387,6.27351103 17.7432119,6.24412364 17.7207355,6.22649121 C17.6921292,6.21473626 17.6737395,6.22061374 17.6512631,6.23236869 C17.1535134,6.50609118 16.6390087,6.70508575 16.0914023,6.84572538 C16.0460409,6.85706051 16.0125307,6.84572538 15.9839244,6.81633799 C15.9381543,6.76386052 15.8956535,6.71432179 15.8474315,6.67317945 C15.6173551,6.47166596 15.3705235,6.31381373 15.0918164,6.19752365 C14.7260644,6.04428943 14.3268022,5.97963719 13.9328526,6.00566601 Z">
                        </path>
                    </svg>
                </div>

            </div>
            <div className='h-12'></div>
            <div className='flex flex-col lg:flex-row -mt-6 ml-4 lg:items-center justify-between max-w-screen-md'>

                <a href='#' className='text-lg hover:underline mb-3'>Privacy Policy</a>
                <div className='hidden lg:inline-block h-5 border-l-2 border-gray-500'></div>
                <a href='#' className='text-lg hover:underline mb-3'>Terms of Use</a>
                <div className='hidden lg:inline-block h-5 border-l-2 border-gray-500'></div>
                <a href='#' className='text-lg hover:underline mb-3'>CA Supply Chain Act</a>
                <div className='hidden lg:inline-block h-5 border-l-2 border-gray-500'></div>
                <a href='#' className='text-lg hover:underline mb-3'>Submit Your Idea</a>
                <div className='hidden lg:inline-block h-5 border-l-2 border-gray-500'></div>
                <a href='#' className='text-lg hover:underline mb-3'>Cookie Preferences</a>
            </div>
            <p className='ml-4 mt-4 text-gray-500 text-sm'>© 2021 Starbucks Coffee Company. All rights reserved.</p>
        </div>

    );
}

export default React.memo(Footer);