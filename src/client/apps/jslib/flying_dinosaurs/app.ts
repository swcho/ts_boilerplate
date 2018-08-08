
import 'config-loader!./.config.ts';
import 'htmlout-loader!./en.html';
console.log(__filename);

import './style.scss';
import $ = require('jquery');
import anime = require('animejs');

/**
 *
 */
let _dinosaur = [
    'M 377.63393,247.85715 C 376.10036,246.27694 374.14275,245.67277 371.78571,244.59822 370.35517,243.64342 368.74597,242.82939 366.875,241.74108 364.78174,241.09269 362.81552,240.33268 360.625,240.13393 358.66882,239.71919 356.76718,239.49893 355.04465,239.41964 353.7249,239.38657 352.24695,239.09101 350.13394,239.82143 347.96858,240.4005 347.07167,241.22954 345.71429,242.09821 344.34845,243.00137 342.9672,243.64229 341.83037,244.26339 340.10129,245.50574 338.81595,245.99434 338.12687,246.48405 337.16582,247.32927 336.39874,247.85434 335.5134,248.6384 334.81124,249.39765 334.04616,250.39358 333.72451,250.8951 333.27656,251.63198 332.87482,252.03385 332.54465,252.63393 331.87471,253.29642 330.90672,254.04496 330.06696,255.13393 329.39197,255.78104 328.08815,256.55 326.91965,257.52233 325.26726,258.27455 324.0545,258.37415 322.00894,258.57143 320.61376,258.73399 317.85125,258.13034 316.36161,258.03572 315.00798,257.8934 312.52617,258.06953 311.58482,257.96876 310.92159,257.91387 308.96439,257.90601 306.91965,257.90178 304.91795,257.78299 301.16748,258.37294 298.52679,258.50446 296.39082,258.67416 294.34273,258.76315 291.91965,258.95089 290.05685,259.21413 287.06526,259.37198 283.97322,259.75446 282.30392,260.20077 280.70959,260.26973 278.73953,260.85324 275.74202,261.66746 272.46585,262.12124 269.24297,262.90047 266.25534,263.34381 264.71885,264.12034 262.72775,264.68039 260.37059,265.30628 257.97862,266.12484 255.72222,266.68854 254.17346,267.00375 251.98088,267.63506 249.94525,267.92563 247.57151,268.29131 246.16926,268.70548 244.24572,268.9313 242.59672,269.4077 241.00307,269.7935 237.89671,270.30888 236.36238,270.72208 234.33976,270.93283 232.11588,271.39825 230.30838,271.92931 228.10625,272.10826 225.80461,272.78536 223.98324,272.94497 222.82041,273.2515 220.72538,273.63488 219.00547,274.24336 217.09523,274.57719 214.76414,274.68279 213.29258,274.53909 211.1741,274.99929 208.46216,274.92976 206.06952,275.20344 204.45232,275.59346 201.66112,275.68102 199.67451,275.87344 197.63076,275.92353 195.10365,276.03368 192.5542,276.34546 189.97771,276.68036 187.80761,276.8634 185.67279,277.29153 182.75225,277.28964 179.91797,277.12491 177.86661,276.92553 175.95673,276.94032 173.66271,276.45209 171.05442,276.01149 169.82868,275.42649 165.77572,275.32714 163.371,275.60874 161.26006,275.01876 158.67279,274.8363 155.64682,274.76908 152.86943,274.30368 150.21712,273.59156 147.21211,272.35705 144.62968,271.41242 141.90906,271.02995 138.11104,270.78868 134.48238,269.6787 129.93951,268.70109 126.36783,268.50709 123.36483,268.28991 120.01969,267.73767 116.35883,266.88133 113.72146,266.74476 110.59195,266.6192 108.49591,266.64747 105.81247,267.55005 104.14016,267.7485 101.88322,268.26028 99.25915,268.75828 97.275873,268.74814 94.78351,268.82472 91.787565,270.44438 89.285714,270.98214 86.972249,271.56988 84.241174,272.28322 81.294649,272.99107 77.573174,273.71128 73.889195,275.13741 71.562497,275.71429 69.226878,276.42874 63.793235,278.68508 59.821425,282.05357 66.547812,281.01169 73.157133,277.2709 80.625003,275.80357 87.119311,274.47814 103.41337,270.89971 114.06029,272.48468 123.12572,273.3925 152.62821,281.45867 159.35961,283.35651 166.88276,285.69669 181.74666,287.3371 188.84674,288.28735 196.5604,289.17533 209.3445,291.39177 213.87988,292.17445 220.02047,293.37453 235.39647,295.90977 240.92094,296.62419 244.63649,297.98377 246.10599,299.88969 247.67857,305.53572 245.53781,307.85163 230.75662,322.00706 229.10714,323.92857 227.23004,326.11523 222.11256,330.65775 219.64286,332.14286 217.17816,335.21282 215.75088,338.98948 214.19643,341.69643 211.45007,345.2013 209.24294,352.36511 205.80357,356.69643 206.94536,359.52034 210.76909,362.81934 212.76785,364.46428 215.48511,365.26971 217.93444,364.98479 220.98215,365.35715 223.49744,365.50864 227.19295,365.36821 228.83929,364.28572 225.20425,362.89971 218.50867,361.06625 216.60715,360.98215 214.15489,359.8088 215.01282,356.94027 216.96429,356.87501 220.98172,357.18966 219.34491,352.94285 224.55357,351.60715 222.41305,349.87114 219.03298,351.74569 216.16072,352.58929 215.72171,349.87159 218.51151,342.06106 220.98214,339.19643 224.45642,335.05596 232.30019,330.35152 236.60715,327.5 241.62901,325.40201 252.80729,322.7287 257.23214,321.78571 259.84626,319.68268 268.25025,313.97136 270.44643,311.25 270.91082,312.21864 264.15735,320.31277 262.5407,322.00653 260.75976,323.31828 258.6212,326.46415 259.73414,329.01305 260.78903,330.92424 265.92771,330.3051 267.79414,331.29192 269.7689,332.07127 277.26023,335.8698 278.82487,336.71035 280.01984,337.61793 285.52462,341.53805 286.81635,341.81591 288.64508,343.0941 294.24757,345.87713 296.66458,346.37023 299.14216,345.66399 297.32932,344.45185 297.22304,343.02968 294.619,341.67315 290.39794,339.84496 289.32739,338.01372 288.26042,336.3161 286.68209,334.01947 286.54979,332.39397 286.58032,330.96357 286.43237,328.97607 285.45899,328.01591 283.45318,328.22003 282.06857,327.10925 280.45868,324.33911 279.45095,326.79149 281.05645,330.04476 282.64979,331.40338 279.81821,331.75213 268.83947,326.74688 267.09223,325.05852 268.20025,323.25643 273.65866,318.41192 275.35433,317.26855 277.89072,315.90671 281.07767,313.11884 282.92336,312.35643 285.14053,310.95162 289.57288,307.29918 291.90455,305.90587 291.54206,308.05852 292.6572,309.87181 293.08737,310.29751 293.04076,310.91934 291.85926,312.03989 291.81921,312.95484 293.03059,312.91022 293.93959,312.3305 294.59462,313.13658 294.5025,314.02693 294.04147,314.68608 294.21712,315.57214 295.05488,315.50937 295.7344,315.27842 296.18129,315.81318 296.24823,316.58635 295.43928,317.60968 295.15396,318.55138 296.2746,318.46746 296.88687,318.75609 296.95751,320.11662 298.5364,319.85214 298.06561,320.60931 299.47425,321.09634 298.80407,322.42868 300.34203,322.53143 300.39424,324.11282 300.40712,325.52 299.5471,329.36604 299.0032,331.03782 300.40379,330.36526 300.56825,328.15072 302.0562,327.19515 302.00474,329.84255 301.6859,332.08544 301.17986,334.20279 303.73588,331.7552 303.79782,330.41759 304.48804,328.5073 305.04962,327.06191 305.41074,323.14055 306.58482,321.33928 307.08086,317.82856 307.44819,316.14427 307.52693,313.83172 308.79294,311.06378 308.81986,306.09917 310.71058,303.97312 310.77968,307.51303 310.81574,313.43303 312.64422,314.41538 313.33535,315.90815 311.86927,318.32724 313.45413,319.37301 315.17617,316.52403 313.38856,299.51308 314.69331,296.43229 315.82304,294.6595 320.17769,291.18499 323.39254,289.50267 325.15258,287.37476 327.52307,282.6096 328.09264,281.11662 328.3367,280.30659 330.31524,276.87415 331.19335,276.03707 332.10439,275.29053 333.01023,273.31955 333.81064,272.21279 335.33244,271.10593 336.80118,270.53238 337.59314,269.73074 338.54868,269.13479 340.10268,268.34964 341.23885,267.36598 341.8957,266.66332 342.78812,266.23222 344.44077,265.0789 345.65396,263.69398 347.85578,262.94713 348.73391,261.39762 350.67554,260.84559 351.38132,260.14918 352.93701,258.83263 355.01721,258.57096 357.21887,257.99632 358.41516,257.52135 360.67538,256.54748 363.43898,256.69871 365.8412,255.55366 367.75067,255.09003 370.61399,255.27207 372.98406,254.37949 378.11538,252.85291 378.68017,250.96482 377.63393,247.85715 Z',
    'M 478.57143,249.64286 C 477.03786,248.06265 474.61641,247.60758 472.5,246.96429 470.53374,246.36663 468.47811,246.04367 466.42857,245.89286 464.29067,245.73555 462.05659,245.46661 460,246.07143 457.46346,246.8174 455.60646,249.0525 453.21429,250.17857 450.76166,251.3331 448.15448,252.15682 445.53572,252.85714 443.37036,253.43621 441.04488,254.84561 438.92857,254.10714 437.29488,253.53708 436.27077,251.74497 435.53572,250.17857 434.76667,248.5397 435.47117,246.80452 435.71615,245.01083 435.98282,243.05837 436.88163,241.62269 437.14286,239.46429 437.15499,237.45568 436.41223,234.85786 437.89862,233.7076 438.65328,233.1236 440.11072,233.90363 441.07143,234.10714 440.98185,233.02856 439.87993,232.30389 438.92857,231.96429 438.36518,231.76318 437.59708,232.53214 437.14286,232.14286 435.46815,230.70758 435.52771,227.34736 436.78572,225.53571 437.35483,224.71613 438.56553,225.02766 439.64286,224.64286 439.04816,223.87554 438.48542,223.28107 437.67857,223.21429 437.01534,223.1594 436.53135,223.84351 435.89286,224.10714 432.99831,222.47049 435.27462,215.69437 433.21429,214.10714 431.52475,215.45987 432.26684,218.36136 431.07143,220.53571 426.17292,219.3927 424.9224,206.31394 420.71429,205.35714 417.63874,208.12488 422.3272,213.38969 422.67857,217.67857 416.46677,217.466 412.41931,202.52434 407.32143,201.78571 405.71774,203.30047 407.52682,205.82388 407.14286,208.57143 404.39475,207.94097 402.39297,200.74045 399.64286,200.35714 398.81791,202.07159 399.93742,204.17372 399.46429,206.42857 397.93877,206.07996 396.2539,203.65811 395.17857,203.57143 394.86886,204.62819 394.919,206.16387 394.46429,207.5 393.81385,208.03947 393.08238,208.45232 392.5,209.10714 393.02847,210.71149 393.70483,211.95815 393.92857,213.39286 393.5593,214.18382 393.00583,214.71039 392.67857,215.53571 393.35777,216.58613 394.61631,217.20314 395,218.57143 394.98053,219.50102 393.59025,219.96308 393.21429,220.71429 393.75381,221.75025 394.42016,222.41652 394.91071,223.30357 395.57575,224.50615 396.36717,225.59145 396.42857,226.96429 396.45309,227.51252 395.84242,228.07272 396.07143,228.57143 397.28274,231.20927 401.78606,230.69673 403.75,232.67857 403.34014,234.24696 402.02879,235.26446 401.25,236.60714 399.96753,238.81819 397.81719,240.84056 397.67857,243.39286 398.17804,246.19984 398.84067,248.27759 400.35714,250.17857 402.44507,252.32106 404.80754,253.38698 407.14286,254.82143 408.93607,255.9229 411.86365,255.77736 412.67857,257.85714 408.50174,259.38363 403.65001,259.74555 399.10714,260.53571 394.77785,261.28872 390.42672,261.91582 386.07143,262.5 383.04191,262.90635 379.96753,263.00251 376.96429,263.57143 375.81527,263.7891 373.66537,264.13957 372.49814,264.21175 366.26373,264.02905 361.21329,262.60577 355,261.96429 348.41074,261.28399 341.78644,261.00169 335.17857,260.53571 328.27455,260.04885 321.38403,259.2475 314.46429,259.10714 308.15353,258.97913 301.79098,258.79812 295.53571,259.64286 289.58402,260.4466 282.00752,260.56008 278.03571,263.92857 284.49424,264.76169 294.22856,263.34233 302.32143,263.57143 311.50777,263.83148 320.67179,264.67509 329.82143,265.53571 337.99554,266.30457 346.1601,267.21751 354.28572,268.39286 360.86185,269.34408 367.45983,270.26725 373.92857,271.78571 377.98042,272.73683 382.3045,273.24863 385.89286,275.35714 388.68732,276.99916 392.95164,278.90306 392.85714,282.14286 392.82269,283.32387 390.92742,283.5504 390.17857,284.46429 388.57352,286.42306 388.07805,289.14992 386.42857,291.07143 384.55147,293.25809 382.11256,294.94346 379.64286,296.42857 378.24959,297.26639 376.37588,297.29305 375.17857,298.39286 372.43221,300.91558 372.90365,306.11511 369.82143,308.21429 367.48107,309.07391 364.22013,307.83943 362.67857,309.10714 364.23511,310.26971 365.7023,310.34193 366.78572,311.25 366.97958,314.52649 363.97866,318.13607 363.03572,321.07143 363.23996,321.64971 363.9551,321.60196 364.64286,321.96429 364.60132,322.84451 363.40568,323.6367 363.57143,324.46429 365.99018,324.12791 367.43888,321.66227 368.57143,319.64286 369.64519,317.72828 368.94369,315.13855 370,313.21429 370.36457,312.55016 371.19008,312.23963 371.60714,311.60714 372.0457,309.43096 372.56805,308.47652 373.39286,307.14286 374.84329,304.59844 376.468,302.01441 378.75,300.17857 381.36412,298.07554 384.67882,295.48922 387.85714,295.89286 388.32153,296.8615 386.15118,298.21247 386.42857,299.46429 387.99376,301.47052 391.01909,302.6405 392.32143,305 393.37632,306.91119 394.29351,309.36846 393.57143,311.42857 392.8314,312.52359 390.70821,313.05553 390,314.46429 391.19497,315.37187 393.35113,313.29357 394.64286,313.57143 396.47159,314.84962 395.77934,317.57522 396.42858,319.70982 396.88586,321.21329 397.04705,323.27114 398.39286,323.99554 399.07459,323.45993 398.96796,322.55199 399.66518,322.29911 400.80791,322.74807 401.4334,324.76144 402.87947,325.15625 403.73074,323.03137 400.32223,320.39566 399.28572,317.85714 397.84812,314.33632 397.31335,310.49204 395.89286,306.96429 394.94827,304.61844 392.92696,302.67116 392.5,300.17857 392.25693,298.75955 392.13131,297.01301 393.03572,295.89286 393.82806,294.91152 395.10088,294.46041 396.60714,294.64286 396.49188,296.43775 393.68105,298.13243 394.64286,299.64286 395.1554,300.44776 396.36789,299.3207 397.5,299.82143 397.13751,301.97408 394.56983,304.12787 394.28572,305 395.42214,305.39862 397.13827,305.35737 398.39286,306.25 397.92247,307.40708 396.73337,308.56892 396.78572,309.82143 397.9436,310.86803 399.40024,310.96663 400.35714,312.14286 399.81097,313.21849 398.83883,314.13042 398.92857,315.17857 400.24551,315.52763 401.75854,313.4333 403.39286,313.57143 403.31627,315.36912 403.07102,318.4512 404.64286,319.46429 407.15925,318.70874 408.16725,311.92368 411.25,311.42857 412.00839,314.5243 409.01029,317.65969 409.10714,320.89286 409.16467,322.81343 409.24926,325.40411 410.71429,326.42857 412.82917,325.53279 412.52991,320.4645 414.46429,320 416.75658,322.08936 414.61318,329.28891 416.25,330.89286 419.36157,329.38401 418.04957,318.56741 421.78572,317.14286 423.50801,318.28675 422.9777,322.73876 425.35714,324.10714 430.20946,321.85911 427.65368,303.55358 433.03572,300.35714 436.70084,302.7031 434.36641,312.63452 437.64608,314.29654 441.84474,311.58327 435.48026,298.11056 438.57143,295.17857 440.33585,294.96671 440.65177,298.72336 442.67857,299.64286 444.96882,297.61463 441.53074,290.66373 443.21429,288.21429 444.72283,288.20926 446.26213,291.14474 448.21429,290.53571 447.82775,288.15526 445.01079,284.2162 445.17857,280.71429 445.42263,279.90426 446.3094,278.96208 447.14286,279.10714 447.85301,279.63292 447.79334,281.37462 448.75,281.78571 449.75841,282.21903 451.17233,281.87307 451.96429,281.07143 451.33501,280.27459 449.84597,280.26937 449.10714,279.46429 448.13453,278.40448 447.62595,276.94157 447.32143,275.53571 446.82999,273.2669 448.38952,270.68831 447.32143,268.57143 446.80081,267.70373 445.36001,268.08061 444.64286,267.14286 445.01843,266.24985 446.1468,265.54894 446.96429,264.82143 449.40181,262.65222 451.78382,260.32253 454.64286,258.75 456.85316,257.53429 459.42117,257.12879 461.78572,256.25 467.42212,254.15521 474.50377,252.81366 478.57143,249.64286 Z',
    'M 553.45939,195.44194 C 552.68344,194.42994 551.71407,194.22741 550.41842,193.71039 549.2613,193.28308 548.54674,192.76658 546.74293,192.05609 547.10492,190.15333 545.88362,185.4803 541.79578,184.99137 539.88424,184.97841 538.21807,185.28018 536.74107,186.0491 535.1813,186.73488 534.38216,188.25057 532.27679,190.04464 531.27214,191.18174 529.99577,193.95275 528.05803,194.73214 527.0047,193.73797 527.23059,192.34765 527.5,191.58482 527.69078,190.74952 528.99795,188.6572 529.68936,187.22065 530.42478,186.02712 531.4352,185.21644 532.14286,183.05804 532.82463,181.60746 534.31401,180.70607 535.4879,179.35492 536.24256,178.77092 535.69108,177.00631 535.80357,175.89285 535.71399,174.81427 536.44243,172.8396 536.18303,171.76339 537.22679,172.23193 538.17744,172.88928 539.41964,173.97321 539.48601,172.00222 537.71521,170.65093 535.80358,169.59821 535.39054,168.37684 535.44053,167.75087 535.22322,166.33929 534.62852,165.57197 536.72848,166.14997 537.5,165.35714 537.15244,164.70248 535.2526,163.67638 534.61411,163.94001 531.71956,162.30336 533.66748,157.74794 532.14286,155.80357 531.39082,156.39737 530.70434,157.42386 529.86608,158.66071 528.09257,157.5177 528.00275,147.65322 525,145.26785 524.11195,148.08023 524.42541,149.05933 524.46428,151.25 521.42212,149.60886 519.96395,139.62255 515.9375,137.58928 514.33381,139.10404 515.96432,141.80602 516.07143,144.375 514.03761,143.3874 512.2144,137.34759 509.91072,137.67856 508.95184,138.58944 510.29456,142.52193 510.17857,144.73214 509.27805,143.89246 504.02175,137.45275 502.58928,137.94643 501.83314,138.77998 502.50828,139.95851 502.32143,141.875 500.80222,141.47048 496.16274,133.63089 494.28572,135.08928 491.55526,137.54184 502.90126,151.24386 503.125,152.67857 501.3718,151.7731 491.66655,140.29074 489.375,141.91963 487.73277,143.41648 498.45559,155.95314 498.83928,157.32143 496.67695,156.68852 488.45632,148.5345 486.65179,149.73214 485.45023,151.25917 492.36659,158.57723 492.85714,159.46428 491.33468,159.149 486.59039,154.16288 485,155.71429 483.95309,156.75359 493.16385,165.037 494.64286,166.78571 492.14881,166.29855 485.08963,160.78602 483.83928,162.67857 482.53656,164.64875 487.877,168.4341 488.125,169.99999 487.06574,170.2914 485.45112,167.89413 484.64286,169.50893 485.58523,172.23518 492.8703,181.98625 495.71428,182.41071 494.63257,185.04427 491.86111,192.09233 492.76786,194.55357 492.90928,196.28004 492.75651,204.8845 493.57143,206.96428 489.3946,208.49077 487.71251,208.62948 486.16071,208.70535 484.8934,208.7724 476.94458,208.52296 472.41071,208.57143 469.38119,208.70992 465.59253,208.80608 462.45536,208.88393 461.30634,209.1016 457.99573,209.8985 454.50707,210.14925 451.26373,210.59155 448.75793,211.13255 442.63393,211.5625 437.11796,212.20803 432.45804,213.8087 425.09255,214.47914 419.19869,215.44438 412.30816,215.52691 403.30498,215.89163 396.99422,215.76362 395.6193,216.21396 392.83643,215.92227 386.88474,216.72601 381.70735,214.94546 381.52361,219.26097 382.99452,221.0411 387.99375,219.49548 391.47779,219.59831 388.85798,221.68926 384.57434,221.90152 384.94828,223.83543 385.73565,226.62459 397.56201,218.95124 402.78344,219.81092 405.3821,219.94139 407.37126,219.665 409.67312,219.41569 411.64153,219.04099 414.07158,218.79518 417.78621,218.37831 421.52768,217.87374 426.04454,217.18913 428.41229,217.0828 432.03964,216.49605 435.38453,216.0281 437.85555,216.24751 440.79618,215.93343 445.73028,214.49341 448.43708,214.01581 451.04254,213.86649 455.04335,212.45827 457.2456,212.80696 459.12891,214.16973 459.17798,215.44184 460.54686,216.98096 462.00305,218.13506 463.77525,218.78257 464.93411,220.03353 465.76339,220.66994 467.31653,221.35542 468.7214,221.90884 470.05473,221.95534 471.49817,221.41045 473.29588,221.20245 475.47442,220.65581 476.92457,220.4327 479.96384,220.47515 481.77523,220.9195 483.43925,221.24794 485.37701,221.92277 486.14802,222.29025 487.211,223.03965 488.12166,223.84163 490.54041,223.50525 492.65552,224.43971 494.60882,225.10352 494.29362,226.28253 494.18471,226.54169 493.94299,228.01946 493.80249,228.87056 493.67248,230.12927 493.45819,231.26455 493.51795,232.30823 493.42039,233.1545 492.82467,234.63033 492.1601,235.65301 490.67032,235.5018 489.66932,235.87567 487.92716,236.26646 487.125,237.27926 487.62011,238.97716 488.96955,238.54943 489.12708,237.70555 490.61095,237.9082 490.34524,240.0407 489.29839,241.21068 488.45416,242.21279 487.96225,243.14539 487.36422,244.68721 487.02094,245.83187 488.49062,245.47479 489.11378,244.018 490.11021,244.47974 490.29502,245.79769 488.85252,246.18164 488.88155,247.24868 491.12066,247.04321 490.55468,246.17015 491.96153,246.12661 492.79761,244.34708 494.15837,241.9855 494.96753,240.72117 495.39673,239.90145 496.30025,237.73083 496.74493,236.68876 496.97221,235.59093 497.34516,234.38443 497.4654,233.42185 497.9063,232.11772 498.25429,231.02881 498.63831,229.81611 499.25258,228.63127 500.51715,227.75432 501.30637,226.84665 502.38209,225.85819 503.32809,225.2683 504.73204,224.44878 505.65695,223.94521 506.2385,222.83122 506.82724,222.21615 507.09484,221.46983 507.48319,221.0315 507.99106,219.55358 507.09459,220.95308 506.51272,222.34838 505.44643,223.66072 504.17326,224.46562 502.53905,225.37476 502.00893,225.98214 501.48861,226.55643 500.59661,227.25287 499.73215,228.08036 498.99357,228.74684 498.28199,230.08035 498.04105,231.21852 497.72691,232.1747 496.95976,234.2408 496.69643,235.71428 496.57521,236.73184 495.83346,237.81083 495.36983,239.05019 494.82366,240.12582 491.53073,246.45028 491.62047,247.49843 492.96898,247.24771 495.05022,245.24808 495.80065,243.99725 496.88908,242.27861 499.26889,236.06087 500.17581,234.51685 500.63492,232.34618 501.52206,229.62789 502.99488,228.65928 504.60559,227.9985 506.09601,226.5381 507.96063,225.8885 510.1963,225.22055 510.5107,223.49722 511.94416,223.51153 513.26986,223.3418 514.49961,223.49556 516.05518,223.3783 517.49516,223.28952 518.87657,223.08355 519.55357,222.92411 520.41068,222.84383 520.97368,222.87544 521.4509,222.65625 522.03479,222.46085 522.70984,222.27001 523.30357,222.03124 524.11571,221.72518 524.551,221.58929 525.22322,221.3616 525.78566,221.1406 526.22068,221.12446 526.69086,220.90823 527.08566,220.57829 527.58072,220.30091 528.00446,219.97322 528.4904,219.66666 529.13275,219.28908 529.43913,219.05638 529.78799,218.65386 530.11925,218.38345 530.47698,217.98588 530.77018,217.57048 531.24549,217.25113 531.5088,216.81572 531.73782,216.32931 532.00067,215.92415 532.29472,215.43691 532.53226,214.96459 532.84591,214.48433 533.00739,214.06829 533.14933,213.58392 533.37021,212.96288 533.47456,212.55322 533.64643,211.99218 533.64142,211.64583 533.91999,211.11204 534.12419,210.6277 534.75288,209.53276 534.95535,208.92857 535.12638,208.27055 535.25255,207.90139 535.66964,207.27678 536.27873,206.25797 536.64209,205.91236 537.36168,204.99503 538.35629,204.1589 539.03049,203.68346 539.89171,203.06139 540.80392,202.35778 542.5005,201.68844 543.00232,201.11876 543.55378,200.49251 543.99882,199.23456 544.4937,198.51973 545.53602,197.96694 548.45127,197.2142 549.8688,196.65108 551.21205,196.51346 552.16965,196.27676 553.45939,195.44194 Z',
    'M 713.32267,217.60779 C 713.77777,216.57589 714.84398,215.39324 716.10648,214.40799 715.94612,213.32894 715.83992,212.89372 715.62432,211.19277 714.95613,210.0904 713.52691,208.1513 712.98259,207.21446 712.41958,206.18119 712.08941,205.07188 711.12862,204.10954 710.50827,202.78439 709.1237,200.87635 707.65129,200.26926 706.50995,199.39889 704.7976,198.86519 703.58501,198.1962 702.80736,197.69874 701.36204,197.25044 700.55615,196.7643 699.51385,196.38972 697.56136,195.10639 696.145,194.6252 694.94182,194.25749 692.86447,193.59558 691.89519,192.93988 690.62922,192.58885 685.85782,191.73329 684.8675,191.54292 684.87523,190.18061 685.31532,185.43656 685.48471,184.18892 686.01986,183.06267 686.44807,180.85574 686.76631,179.11398 687.79431,177.34696 689.5056,171.37853 689.39597,173.27649 688.64131,174.85978 691.97477,166.33001 692.97561,164.4 693.7287,163.6289 694.44606,161.09745 696.11816,157.87353 697.32219,155.26712 699.96843,150.24809 701.10271,147.44579 700.50532,144.7917 700.31768,140.75942 699.36315,138.55717 698.54063,135.52092 696.89759,129.18739 696.80022,126.69987 695.63711,124.54989 696.23971,121.19621 694.82844,118.00803 694.38673,114.42342 691.21661,101.27716 690.83306,97.455831 689.71055,93.941219 686.37362,72.171282 684.8826,68.441164 684.57527,65.575746 677.43058,39.825199 675.95591,35.742508 674.38676,39.642325 673.88947,51.076013 673.37866,55.218874 671.5569,53.317505 664.32287,31.401094 662.12969,28.989166 661.11147,31.792059 665.79305,62.719179 666.80606,67.589691 663.72364,66.055696 650.78923,32.479783 647.40404,29.185098 646.81916,33.548466 656.85965,74.688841 657.0172,80.049749 654.08813,77.586508 641.90361,42.427746 638.53868,40.347143 637.58239,43.675899 648.07177,74.251025 646.86267,77.236358 644.80926,76.449198 636.8625,56.968498 633.38063,54.351652 632.67065,57.543802 644.327,87.744799 644.09905,91.496139 641.85184,88.401207 634.74759,76.97094 632.47737,73.112409 631.06959,76.563408 631.69508,83.221478 632.07164,89.900797 631.4368,93.794027 631.40561,96.551513 631.82425,99.328348 631.81788,101.83031 633.28225,109.46869 632.26736,113.65676 631.87244,118.12153 628.0105,136.56774 629.45795,141.18938 627.18479,145.03748 625.30972,150.07666 624.29638,152.75359 623.04575,156.36423 621.6887,164.85084 619.32686,167.68675 616.27259,170.34223 616.7719,174.56769 620.42787,177.52824 619.07453,180.0106 617.79185,183.44159 619.33207,186.24402 619.77651,188.71505 623.28629,197.9873 622.01961,199.50323 619.8391,199.48514 617.58233,200.10188 616.11929,200.11532 615.15633,200.21027 613.51401,200.57717 611.98955,200.43254 610.59459,200.2743 608.19037,200.55731 605.78121,200.56062 604.27781,200.7436 602.26436,200.73977 600.45181,200.81475 599.27194,200.92444 596.80576,201.12441 594.2081,201.39803 592.68327,201.38858 590.52795,201.97642 589.14556,201.99866 587.51682,202.50901 585.18372,202.69818 583.24088,202.87742 581.63971,202.90445 579.57081,203.412 577.12494,203.56689 573.12587,204.36994 571.35841,205.18049 568.81894,206.56093 570.97159,207.81203 575.52141,207.06471 577.4729,207.11782 579.45302,207.2073 581.7752,207.20952 583.12695,207.20846 585.16393,207.42479 586.07056,207.43945 587.50324,207.64181 589.06897,207.53461 590.66878,207.47947 592.86964,207.69873 595.79198,207.41459 599.92608,207.71486 603.27621,207.90545 601.22459,208.95321 596.83771,208.75125 595.67656,209.36961 599.65988,209.67163 603.72721,209.27435 605.60052,209.24956 608.51804,208.89552 611.53343,208.39166 613.52096,208.37319 615.46215,208.30792 616.79018,207.85876 617.87458,207.81211 619.73634,207.84138 621.90047,206.93173 623.41877,206.74465 624.66245,206.61726 625.25688,206.33547 626.38285,206.43749 627.13929,206.50145 627.88577,206.25185 628.49644,206.24823 629.43394,206.21304 630.19051,206.13541 630.90044,206.13679 631.73568,206.22978 632.16927,206.18197 633.12884,206.24744 633.85324,206.29733 634.16911,206.2963 634.78042,206.32674 635.73264,206.36282 636.40976,206.3662 636.95271,206.432 638.01321,206.52983 638.71042,206.4548 640.06742,206.65986 639.01904,206.91647 638.49651,207.25331 637.52292,207.38274 636.80311,207.63549 635.91525,207.57893 634.91974,207.5721 634.01263,207.59466 633.44473,207.578 631.99763,207.47201 630.92202,207.39124 630.43663,207.43814 629.61354,207.4071 628.27047,207.32262 627.01896,207.14984 625.5651,207.98522 626.77918,208.46397 627.61701,207.7341 628.09049,208.97107 626.32365,209.6713 625.3182,209.38679 624.1822,209.15793 623.24983,209.17278 621.79989,209.36423 620.76622,209.58448 621.66777,210.57256 623.06246,210.43671 623.12783,211.40577 622.18422,212.10923 621.27336,211.15365 620.45814,211.62966 621.56911,213.27893 622.19014,212.20267 622.82181,213.27529 624.55731,213.16742 627.59966,213.28041 628.92414,213.37063 629.74229,213.3551 631.47507,213.42686 632.47227,213.32886 633.42031,213.03856 633.68548,212.69634 634.48314,212.3805 635.68197,212.16819 637.85031,212.12414 638.95406,211.90658 640.13406,211.87944 642.24202,212.60521 643.28139,212.83155 644.19404,212.95853 644.733,212.77862 645.96528,212.94474 647.0122,213.11298 647.87225,213.74931 648.59949,213.94452 649.29205,213.83486 649.0398,213.47205 650.40188,213.23781 648.93546,213.13733 647.53419,213.63808 646.06321,213.36884 644.89785,213.15431 643.22741,212.92561 642.53104,212.7726 641.8645,212.61313 640.94525,212.21732 639.93609,211.89853 639.10526,211.60897 639.20675,211.84924 638.22161,212.1461 637.34652,212.30884 634.80902,212.48524 633.55432,212.90725 632.7136,213.24568 632.17056,213.23569 631.0123,213.40285 629.94595,213.43639 621.85639,213.31483 621.08162,213.82988 621.84918,214.76919 624.63144,215.56365 625.92048,215.61406 627.71601,215.7278 633.54973,214.93096 635.13266,214.97814 637.0113,214.41168 639.81081,213.11717 641.188,213.84778 642.62438,214.19387 647.52136,215.14057 649.17668,215.76013 650.40552,216.01342 653.43382,216.72216 654.60738,216.74834 655.64094,216.7989 657.26309,216.77052 658.41287,217.04705 659.46608,217.24604 660.41502,216.90893 661.02104,216.91772 661.62132,216.95112 663.24877,216.66843 663.72313,216.73383 664.33441,216.7736 666.50592,216.42465 667.06191,216.56363 667.57675,216.55568 668.48659,216.51862 669.01552,216.44325 669.57829,216.42164 671.02024,216.15385 671.54855,216.05426 672.1161,216.09331 674.06477,215.78278 674.61749,215.63364 675.23102,215.4825 676.41213,214.82555 677.23057,214.59193 677.92795,214.18369 679.14875,213.51429 680.01534,213.14887 680.80061,212.79353 681.56398,212.61361 682.41977,212.42969 682.89435,212.40058 684.7492,211.5714 685.25205,211.59238 685.71933,211.57587 687.919,211.45058 688.3103,211.39901 688.74628,211.30324 690.86769,211.38027 691.22977,211.28709 691.73794,211.18195 693.29393,211.3311 693.82632,211.32029 694.28874,211.27282 695.38433,211.48175 696.20977,211.55125 696.96204,211.50577 698.71686,211.71412 699.37856,211.77215 700.42758,211.81154 701.19238,211.92026 702.20965,212.08848 703.34853,212.23372 704.08894,212.46943 705.1405,212.60218 706.07391,213.01064 706.48185,213.04735 707.13695,213.19442 707.85702,213.35595 708.73898,213.52391 709.50371,213.60393 710.44311,213.83889 711.35496,214.03299 712.05566,214.28377 712.58637,215.23749 712.62971,216.53148 713.32267,217.60779 Z'
];

function init() {
    let current = 0, index = 0, first = true, lock = true;
    $('#svg').css('cursor', 'crosshair');
    let timer = setInterval(function () {
        if (current < 4) {
            anime({
                targets: '#dinosaur',
                d: [_dinosaur[current]],
                easing: 'easeOutQuad',
                duration: 1500,
                loop: false
            });
        } else {
            if (first) {
                first = false;
                lock = false;
                $('#svg').css('cursor', 'pointer');
                anime({
                    targets: '#dinosaur',
                    opacity: [0],
                    easing: 'easeOutQuad',
                    duration: 500,
                    loop: false
                });
                clearInterval(timer);
                timer = setInterval(function () {
                    index = index % 25;
                    let Eagle;
                    for (let i = 0; i < 25; i++) {
                        Eagle = document.getElementById('Eagle' + i);
                        Eagle.setAttribute('visibility', 'hidden');
                    }
                    Eagle = document.getElementById('Eagle' + index);
                    Eagle.setAttribute('visibility', 'visible');
                    index++;
                }, 33);
            }
        }
        current++;
    }, 2000);
    $('#svg').click(function () {
        if (lock) return;
        clearInterval(timer);
        lock = true;
        let dinosaur = document.getElementById('dinosaur');
        dinosaur.setAttribute('d', 'M 208.125,236.25 C 206.59143,234.66979 205.24141,232.69686 203.125,232.05357 201.81093,231.64225 198.71069,230.98257 197.05357,230.80357 195.126,230.64626 193.9364,230.42197 192.36607,230.17857 190.54382,229.85311 189.49039,229.58821 187.54465,229.10714 185.76166,228.92238 184.04733,228.54075 181.875,228.34821 179.665,228.16835 177.78595,227.56883 175.71429,227.76786 174.16988,227.91208 173.12863,228.1152 171.78803,228.31274 171.00991,228.45727 170.2058,228.49177 169.11389,228.59939 167.96922,228.46006 166.85001,228.45741 165.93237,228.70741 165.31496,229.03051 164.35242,229.34365 163.5735,229.74895 162.95341,230.09439 162.16036,230.43939 161.54487,230.98624 161.22753,231.54223 160.62353,231.98957 160.19075,232.46263 159.74869,232.95858 159.06629,232.89668 158.44035,233.48046 157.45251,233.87682 155.96104,235.68772 156.41771,235.16395 156.84372,234.60194 155.32148,236.44989 154.77985,237.11742 154.36728,237.62503 153.89184,238.46024 153.42902,238.9601 153.02887,239.30995 152.82004,239.8586 152.46487,240.52697 152.16066,241.05568 151.44189,243.18384 151.12194,243.80244 150.82876,244.38617 150.17449,246.19486 149.9707,246.8312 149.78741,247.48928 149.47879,248.04127 149.14472,248.75829 148.88776,249.49261 147.86006,251.05349 147.49595,251.90803 146.9508,252.63991 146.38897,253.12246 145.78434,253.84342 145.36445,254.38447 144.74547,254.7234 144.11591,255.21534 143.48564,255.52933 142.85759,255.71263 141.96774,255.75861 140.68488,255.64141 140.25894,254.5954 139.0417,253.93107 137.51618,253.58246 136.57542,253.85084 135.50009,253.76416 134.38213,254.41679 133.85023,254.4805 132.12327,255.20625 131.47283,255.74572 130.29615,256.64426 129.1876,257.46097 128.05664,258.41774 126.95214,259.25966 126.24498,260.45152 125.87571,261.24248 124.18897,262.49759 123.86171,263.32291 123.20526,264.73759 122.35915,265.63792 121.5691,266.88479 120.78062,268.58339 120.29873,269.44642 119.74123,270.62082 118.52311,271.68337 117.8562,273.35335 116.57234,275.49966 116.14984,277.38911 115.79648,278.35993 115.85788,279.73277 115.57249,281.04376 115.42775,282.1135 114.84165,283.74168 114.62199,285.40646 114.57566,286.49887 114.30728,288.13728 111.72234,288.56089 109.55241,288.2619 108.02951,288.40256 106.00293,288.72473 104.02431,288.40029 101.82509,287.97617 99.373812,288.02979 97.760343,287.93571 95.496811,288.14542 92.501779,287.75719 90.578817,287.97964 88.381046,288.28082 86.445931,289.00256 84.012464,289.15577 82.438703,289.39667 80.938069,289.83478 79.646368,290.15082 77.224419,291.33015 74.935692,292.26168 72.623133,292.90247 71.547739,293.53348 70.149528,293.93983 69.338324,294.36132 68.334378,294.8608 67.213977,295.4219 66.13881,295.89373 64.828483,296.59554 62.808282,297.2804 60.686005,298.0705 59.565992,298.49116 58.529605,298.88114 57.55624,299.07218 56.518357,299.45328 55.584997,299.86008 53.897321,300.25162 52.689823,300.71872 51.380728,301.24727 49.656277,301.53685 48.088701,301.85255 46.560227,302.40928 44.403728,302.43726 42.027471,303.32702 48.486001,304.16014 52.475078,303.11958 55.012109,302.6542 58.705745,301.96723 61.114369,300.66427 65.023843,299.37832 68.462863,298.06374 72.134586,295.75824 76.293015,295.22754 80.130777,294.71797 82.324058,294.24644 87.124876,294.21437 90.172597,294.39919 91.606505,294.31571 94.322858,294.36311 96.11319,294.44609 98.327805,294.96259 99.924469,295.5071 101.47549,295.73683 105.21353,296.21711 107.58277,296.60251 110.02066,296.79084 113.52271,296.7298 116.2455,298.05339 115.37738,301.54799 117.47949,304.51547 117.88727,307.04694 118.17564,309.11796 117.24864,311.46797 116.76136,312.94147 116.29456,316.09948 117.12159,317.68567 117.92583,319.56064 118.98612,321.27976 120.88222,322.2501 121.50811,324.19047 122.16777,325.72673 122.06794,327.06433 122.55344,328.49557 121.66422,330.17533 121.49189,332.42938 122.4175,333.65879 122.62174,334.23707 123.14955,340.27989 123.05254,342.3986 122.86166,344.47352 122.00277,346.86251 121.64535,347.98906 121.44821,351.31492 116.82999,354.86847 115.53351,356.69815 117.54151,356.53995 121.17867,355.92175 123.43081,355.00648 124.65488,355.98662 125.58518,357.25003 126.82437,357.73863 129.05741,356.14452 133.54253,355.69406 137.0175,355.67308 135.99515,353.9785 133.14145,353.26861 131.87753,351.52409 131.44482,350.33596 134.32181,352.456 135.64656,351.59196 134.97894,349.66799 132.45844,347.92633 131.46556,345.05694 130.76659,342.28169 130.49865,338.59093 130.5458,336.96046 132.0586,334.12082 131.42833,329.76509 129.91066,327.5294 128.88444,325.76248 129.14663,319.92015 130.55626,319.38279 131.88822,318.08513 130.1318,310.06529 131.09973,307.42902 133.2089,309.44843 136.53293,309.88315 138.47734,308.41556 138.38257,311.49345 137.98285,313.76055 139.0997,315.40077 136.99448,316.96742 136.38589,322.53702 141.29241,322.8103 142.32066,324.80471 141.71552,326.67498 141.93095,327.84252 141.35125,330.09641 140.63297,331.61053 140.36918,333.27906 139.876,334.57785 139.36987,337.59071 139.23726,338.84241 139.29435,340.50328 141.6232,342.93478 142.51273,344.19134 143.72925,346.69318 143.40329,348.72441 142.84811,350.32311 142.83911,352.23234 141.07827,354.27112 141.03908,355.85592 142.52651,356.0195 142.74934,354.25123 144.42663,354.58826 144.93917,355.39316 142.50246,358.20531 144.28215,359.92026 146.63142,360.00873 146.88843,357.87087 148.02091,357.36688 149.76444,356.42986 151.47255,358.18493 152.72714,359.07756 154.14563,358.80367 156.01236,359.49031 157.43844,360.1132 158.59632,361.1598 157.56951,358.35649 157.0382,357.07145 159.2395,357.40297 161.41551,357.91423 162.93622,357.98932 162.76495,356.56398 158.38237,354.92755 157.44094,353.29128 155.93338,350.96776 153.34133,347.41013 151.07816,345.04612 150.16022,342.05825 146.98977,335.90282 150.07252,335.40771 150.83091,338.50344 148.40521,325.84089 148.50206,329.07406 148.55959,330.99463 148.29499,322.09488 149.19338,320.529 151.30826,319.14753 151.5759,315.70688 153.59123,314.51385 154.58835,311.98917 155.25822,308.91336 153.89996,307.36033 154.50214,304.71821 153.66573,301.24207 154.08301,298.7652 154.59108,297.31875 154.13379,296.19747 154.44905,294.85409 155.0516,292.72748 155.34475,290.40077 155.22232,287.64955 155.64952,286.47427 153.23216,284.82638 153.35486,283.21 152.61569,281.26574 151.93504,280.37746 151.99066,277.48594 151.8528,275.77654 151.27849,273.50416 151.84823,272.11664 151.46719,270.16936 150.48229,269.37845 149.53589,268.11762 150.27542,266.5341 150.88283,265.72892 151.21603,264.71515 152.04371,263.2656 153.44752,261.29527 154.06052,260.14085 154.30458,259.33082 154.90803,257.9839 155.62007,257.07664 156.45164,255.53824 156.47291,254.20391 157.18673,253.27936 158.07372,251.44613 158.152,249.80501 158.94396,249.00337 159.40748,247.72084 160.52545,247.03015 161.6889,246.10365 162.94236,245.65095 164.61918,245.86137 167.0669,245.95304 168.92295,245.82936 170.37355,245.46155 172.09817,244.96363 173.72268,244.74351 175.22912,244.46824 176.17141,244.25903 178.51155,243.60886 180.27004,243.72558 181.37085,243.48376 182.71319,243.41562 185.0101,243.35029 186.83645,243.00349 189.04675,241.78778 195.0491,242.64154 197.41365,241.76275 200.98945,241.84304 207.98146,242.36981 208.125,236.25 Z');
        // 		dinosaur.setAttribute('opacity',1);
        let style = dinosaur.style;
        style.opacity = '' + 1;
        for (let i = 0; i < 25; i++) {
            const Eagle = document.getElementById('Eagle' + i);
            Eagle.setAttribute('visibility', 'hidden');
        }
        init();
    });
}
window.onload = function () { init(); };