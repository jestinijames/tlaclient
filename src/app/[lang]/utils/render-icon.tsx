/* eslint-disable @typescript-eslint/no-explicit-any */
import {BiBible} from "react-icons/bi";
import {BsCalendar3} from "react-icons/bs";
import {CgLastpass} from "react-icons/cg";
import {
  FaChalkboardTeacher,
  FaClock,
  FaGooglePlusG,
  FaPeopleArrows,
  FaSearch,
  FaShareAlt 
} from "react-icons/fa";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaPeopleLine,
  FaPodcast,
  FaRegStar,
} from "react-icons/fa6";
import {GiAngelWings, GiHandOfGod, GiKing} from "react-icons/gi";
import {HiHome} from "react-icons/hi2";
import {IoManOutline} from "react-icons/io5";
import {MdClose} from "react-icons/md";
import {PiChurchDuotone} from "react-icons/pi";
import {
  RiArticleLine,
  RiContactsLine,
  RiFacebookLine,
  RiInstagramLine,
  RiMailOpenLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
import {SiBookstack} from "react-icons/si";
import {TbStackPop} from "react-icons/tb";

export function RenderIcon({
  text,
  className,
}: {
  text: string | undefined;
  className?: string;
}) {
  switch (text) {
	case "SHARE":
		return <FaShareAlt className={` ${className}`} />;
    case "FACEBOOK":
      return <RiFacebookLine className={` ${className}`} />;
    case "TWITTER":
      return <RiTwitterLine className={` ${className}`} />;
    case "YOUTUBE":
      return <RiYoutubeLine className={` ${className}`} />;
    case "INSTAGRAM":
      return <RiInstagramLine className={` ${className}`} />;
    case "MAIL":
      return <RiMailOpenLine className={` ${className}`} />;
    case "GPLUS":
      return <FaGooglePlusG className={` ${className}`} />;
    case "CLOSE":
      return <MdClose className={` ${className}`} />;
    case "Home":
      return <HiHome />;
    case "About":
      return <FaPeopleArrows />;
    case "Faculty":
      return <FaPeopleLine />;
    case "Courses":
      return <SiBookstack />;
    case "Articles":
      return <RiArticleLine />;
    case "Podcasts":
      return <FaPodcast />;
    case "Contact":
      return <RiContactsLine />;
    case "The Holy Scriptures":
      return <BiBible className={` ${className}`} />;
    case "God":
      return <GiHandOfGod className={` ${className}`} />;
    case "Man":
      return <IoManOutline className={` ${className}`} />;
    case "Salvation":
      return <GiKing className={` ${className}`} />;
    case "The Church":
      return <PiChurchDuotone className={` ${className}`} />;
    case "Angels":
      return <GiAngelWings className={` ${className}`} />;
    case "Last Things":
      return <CgLastpass className={` ${className}`} />;
    case "Left Arrow":
      return <FaArrowLeftLong className={` ${className}`} />;
    case "Right Arrow":
      return <FaArrowRightLong className={` ${className}`} />;
    case "Star":
      return <FaRegStar />;
    case "Search":
      return <FaSearch className={` ${className}`} />;
    case "Calendar":
      return <BsCalendar3 />;
    case "Clock":
      return <FaClock />;
    case "Who We Are":
      return <FaPeopleArrows />;
    case "What We Teach":
      return <FaChalkboardTeacher />;
    case "stackpop":
      return <TbStackPop className={` ${className}`} />;
    default:
      return null;
  }
}

export function CircularText({
  className,
  ...rest
}: {
  className?: string;
  rest?: any;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="496"
      height="496"
      viewBox="0 0 496 496"
      xmlSpace="preserve"
      className={`w-full h-auto ${className}}`}
      {...rest}
    >
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M414.423676,753.534912 
	C428.659607,761.719849 444.689758,762.352295 459.687042,766.567078 
	C465.762024,768.274353 471.966309,769.599487 478.182037,770.702332 
	C482.807709,771.523010 483.972046,773.405884 482.840820,778.120544 
	C478.262756,797.201172 474.091125,816.379211 469.777344,835.523132 
	C468.935516,839.258972 467.996094,842.979980 467.347626,846.750122 
	C466.825104,849.787964 465.208160,850.610596 462.407288,849.975769 
	C445.210602,846.078186 428.017242,842.165100 410.802032,838.350769 
	C407.928162,837.714050 407.099396,836.432251 407.571716,833.459839 
	C409.420074,821.826782 409.312500,821.866150 420.528412,824.458557 
	C429.120697,826.444580 437.774292,828.168945 446.350525,830.219116 
	C449.680573,831.015198 451.350037,830.229187 451.928986,826.720764 
	C452.520233,823.137451 453.887146,819.684021 453.874054,815.368286 
	C445.492920,813.391479 437.140961,811.341187 428.750763,809.461426 
	C415.934174,806.590027 418.614532,808.138672 420.773560,796.404175 
	C421.343994,793.303711 422.750916,792.295654 425.983551,793.068542 
	C435.051666,795.236816 444.216675,797.000427 453.280975,799.183167 
	C456.627533,799.989075 458.016144,799.205322 458.915405,795.783936 
	C462.207916,783.256653 462.327911,783.306274 449.949554,780.607178 
	C442.141846,778.904907 434.351105,777.124817 426.545776,775.411499 
	C419.465546,773.857300 419.462036,773.876404 420.843964,766.679077 
	C420.991760,765.909302 421.127594,765.137207 421.487122,763.177185 
	C414.734131,766.485535 408.821533,769.358826 402.929626,772.273926 
	C392.355774,777.505432 392.357086,777.516663 394.487091,789.159363 
	C395.980103,797.320251 397.485504,805.478882 399.152679,814.548889 
	C393.742004,813.672485 390.229156,810.310608 385.988251,808.935425 
	C380.789551,807.249756 379.511139,803.368774 378.946106,798.657043 
	C378.434570,794.391174 377.967377,790.087402 376.211639,785.559265 
	C370.963867,787.145508 366.471619,790.005310 361.867188,792.480286 
	C358.561584,794.257141 355.755737,794.401367 352.545410,792.471741 
	C348.772736,790.204285 344.413269,788.917725 340.136383,785.407776 
	C345.874329,782.503296 350.855225,779.964050 355.852570,777.457581 
	C360.468231,775.142517 365.099518,772.858582 369.727905,770.568909 
	C371.633301,769.626343 373.220184,768.421692 372.778687,765.990112 
	C370.800354,755.094421 368.776276,744.207031 366.522888,731.983032 
	C359.112427,740.768311 352.604706,748.484131 346.096069,756.199219 
	C340.834991,762.435486 335.444824,768.569214 330.371857,774.954895 
	C328.226013,777.656067 326.597443,777.560791 324.323273,775.362427 
	C322.290863,773.397644 320.158722,771.494080 317.862488,769.855042 
	C315.101349,767.884338 313.944550,765.814087 317.090607,762.439331 
	C306.541077,761.586060 298.971893,756.662537 293.295197,748.730469 
	C289.075836,742.834717 287.192810,736.271423 287.695831,728.967590 
	C288.625092,715.474976 301.619507,701.171387 315.175568,698.908569 
	C330.283813,696.386658 343.226257,704.583679 350.183838,721.561340 
	C355.238037,717.202759 358.759430,711.782776 362.957642,707.026184 
	C367.838074,701.496582 367.846802,701.198730 373.349487,706.203979 
	C382.782715,714.784485 383.482178,711.824646 374.677155,722.288574 
	C372.658112,724.688049 370.710999,727.148071 368.581696,729.763367 
	C371.830872,733.386658 376.037689,734.754883 379.917572,736.286438 
	C384.127502,737.948242 385.636047,740.855408 386.212799,744.903809 
	C386.933655,749.963867 387.849548,754.996277 388.777466,760.624207 
	C394.520691,758.923035 399.230072,756.110291 403.944794,753.538391 
	C407.544617,751.574646 410.659088,750.927490 414.423676,753.534912 
M331.164825,744.715576 
	C339.010529,736.766846 340.069397,727.855103 333.936249,721.390015 
	C327.927917,715.056519 319.841248,714.681458 312.982788,720.418091 
	C305.876160,726.362305 304.029480,735.703064 308.684052,742.161987 
	C314.052399,749.611450 322.021210,750.704102 331.164825,744.715576 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M726.982544,650.955688 
	C721.471863,654.734070 717.555054,659.432068 715.050781,665.201355 
	C712.096436,672.007690 714.429260,678.385010 721.414734,682.150513 
	C722.036194,670.949768 727.350220,662.496277 736.339783,656.387634 
	C741.536926,652.856140 747.391418,650.731262 753.729126,651.124695 
	C767.628967,651.987549 780.232300,663.028381 782.246460,675.746277 
	C784.811707,691.942993 776.549194,705.110352 759.120728,712.155029 
	C764.188416,715.177979 762.005798,718.161194 759.440308,721.421204 
	C752.636963,730.066223 752.673828,730.148621 744.003113,723.643250 
	C732.419861,714.952759 720.705505,706.424133 709.366699,697.423767 
	C695.255310,686.222656 692.717957,671.779175 701.923157,656.272278 
	C707.723511,646.501160 715.565430,638.716064 725.817200,633.497925 
	C729.138367,631.807434 731.106689,632.247253 732.835205,635.884155 
	C737.131653,644.924072 737.293518,644.847168 726.982544,650.955688 
M764.172729,688.430786 
	C765.853821,679.045715 761.918396,672.174927 753.832520,670.378296 
	C746.088379,668.657471 737.933899,673.865845 735.467468,682.108093 
	C733.162720,689.810303 737.007690,697.173096 744.787170,699.954285 
	C752.379639,702.668579 759.884094,698.431885 764.172729,688.430786 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M322.143799,235.464569 
	C329.385681,214.872910 349.087189,202.039871 370.516663,203.733276 
	C372.326447,203.876312 374.115875,204.369034 375.895081,204.783691 
	C378.273926,205.338089 379.321838,206.697189 378.354919,209.171982 
	C378.052063,209.947128 377.805481,210.744965 377.550354,211.537949 
	C376.583496,214.543015 376.343201,218.142776 374.479034,220.406830 
	C372.151794,223.233353 368.579865,220.365280 365.536133,220.317307 
	C354.048584,220.136215 341.814209,229.780334 340.226868,240.522095 
	C338.244507,253.936966 345.595978,266.149048 357.937897,269.943237 
	C369.111176,273.378204 382.851715,266.767426 387.935242,255.743988 
	C388.982269,253.473618 388.519592,249.354996 391.670013,249.328674 
	C396.251221,249.290375 400.983673,250.356979 405.181854,252.401138 
	C407.166962,253.367722 406.078766,255.712021 405.492523,257.407654 
	C399.391388,275.054108 386.385620,285.148010 368.619263,288.028534 
	C338.136688,292.970856 314.201721,265.696838 322.143799,235.464569 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M760.045166,382.975006 
	C736.878845,381.713013 715.438171,354.898346 721.357971,328.548828 
	C725.027344,312.216309 738.631409,299.893951 755.652466,296.972473 
	C771.799561,294.201019 788.907410,302.391876 798.487244,317.730530 
	C804.174805,326.837158 807.449829,336.574371 805.502075,347.584076 
	C804.906250,350.952118 803.251953,351.713562 800.302307,350.981140 
	C799.656311,350.820709 799.020447,350.617004 798.371277,350.471832 
	C789.161499,348.411926 789.161194,348.413574 788.774841,339.174072 
	C788.295471,327.708649 778.560242,317.252563 766.712402,315.478027 
	C756.369507,313.928894 743.451050,322.076141 739.914673,332.378479 
	C736.064026,343.595978 741.017029,356.775543 751.263794,362.536835 
	C752.132019,363.024994 753.166626,363.271667 753.935730,363.871796 
	C756.462036,365.843170 761.360535,363.970734 762.159302,368.077362 
	C762.735535,371.039886 761.716370,374.329865 761.305603,377.460236 
	C761.091309,379.092834 760.654175,380.696167 760.162354,382.657837 
	C760.007019,383.002991 760.045166,382.975006 760.045166,382.975006 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M709.256226,269.679565 
	C708.320496,275.808197 706.256165,280.996277 703.004272,285.772614 
	C701.096924,288.573975 699.322510,288.912659 696.461975,286.937561 
	C686.732483,280.219727 676.859131,273.709900 667.023376,267.146637 
	C665.546753,266.161255 664.199402,264.832336 662.270752,264.745605 
	C660.219055,270.994904 662.014465,276.171509 667.843628,280.892822 
	C671.555908,283.899597 675.704834,286.109131 680.598816,285.848938 
	C684.639099,285.634155 686.036316,287.434387 686.731873,291.196503 
	C688.552429,301.043030 687.652832,302.679749 677.547668,301.203522 
	C662.675049,299.030884 651.546082,290.846893 645.802002,276.845612 
	C640.753784,264.540436 643.942749,253.219742 652.889343,243.677750 
	C662.140259,233.811249 675.361450,231.380219 688.211426,236.728424 
	C702.144592,242.527451 709.584167,254.000931 709.256226,269.679565 
M669.335571,252.956024 
	C669.322937,253.425903 669.106140,254.152908 669.327148,254.328369 
	C676.321106,259.880585 683.830566,264.644958 691.527954,269.333008 
	C694.036621,262.657257 692.862610,257.764282 688.096191,253.691345 
	C682.509460,248.917496 676.537292,248.521759 669.335571,252.956024 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M653.397339,753.566101 
	C665.560364,766.010559 667.750732,780.847351 659.636292,794.266541 
	C652.168152,806.616638 634.413879,813.551941 620.898315,809.269226 
	C611.558350,806.309631 605.643616,799.643311 601.444763,791.062866 
	C599.633362,787.361206 600.479248,785.378540 604.236877,783.787476 
	C614.958740,779.247559 625.585327,774.481079 636.218079,769.733704 
	C637.672852,769.084167 639.489685,768.868286 640.468384,766.806885 
	C638.703979,763.397583 635.295044,762.543152 631.862610,762.255371 
	C623.715881,761.572327 617.035828,764.730103 612.646545,771.515625 
	C610.341553,775.078979 608.366943,775.066833 604.940857,773.543762 
	C595.486450,769.340820 595.099060,768.137878 601.673523,760.014282 
	C614.116089,744.639771 638.591919,741.457336 653.397339,753.566101 
M640.893982,792.502625 
	C645.397827,789.054016 647.996765,784.883423 646.178284,778.193542 
	C637.409607,781.519897 629.247253,785.061218 621.222534,789.205139 
	C625.722168,796.227112 631.583557,797.176086 640.893982,792.502625 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M231.347137,517.240723 
	C232.681885,515.741882 233.798157,514.508545 234.916107,513.276733 
	C239.901108,507.784485 240.531052,507.808533 245.370773,513.672607 
	C260.915161,532.507324 252.233475,564.184814 229.592773,570.382202 
	C217.249054,573.760986 205.928162,571.166260 197.354858,561.283508 
	C187.907867,550.393433 186.102844,537.645996 191.446609,524.406433 
	C196.222260,512.574402 206.201828,507.403442 218.403839,505.925842 
	C221.620468,505.536377 223.152847,506.568146 223.466843,510.188538 
	C224.541946,522.584473 226.000946,534.947144 227.301437,547.323730 
	C227.422150,548.472595 227.309509,549.673340 228.655869,550.966858 
	C233.109619,549.751099 235.498169,546.210327 236.391876,541.988708 
	C237.884140,534.939758 237.265289,528.066589 232.376373,522.175964 
	C231.264694,520.836487 229.429184,519.625061 231.347137,517.240723 
M215.358429,543.974915 
	C214.257599,537.879211 214.725998,531.539246 212.917099,525.493591 
	C205.657883,527.673889 202.067764,534.016418 203.469986,541.574341 
	C204.670761,548.046387 209.402145,552.374207 215.132080,552.147339 
	C216.261230,549.791443 215.514267,547.299683 215.358429,543.974915 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M254.941193,616.964111 
	C276.292175,620.239990 290.421387,637.165222 288.483978,656.642273 
	C286.055145,681.060059 258.785370,693.544617 238.756821,679.408203 
	C222.342819,667.822815 217.896774,644.687134 229.478149,629.660522 
	C235.710632,621.574036 244.425705,617.761169 254.941193,616.964111 
M240.569656,646.278687 
	C238.294357,653.318604 240.233719,660.226196 245.579391,664.121948 
	C251.197922,668.216553 259.024963,667.731567 265.554657,662.884460 
	C271.875763,658.192139 273.789703,650.533875 270.322144,643.808228 
	C266.666290,636.717346 259.415283,633.830261 251.762650,636.557007 
	C247.073242,638.227844 243.245514,641.045410 240.569656,646.278687 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M196.275574,443.369415 
	C194.156891,422.771118 207.043762,404.866333 226.188568,403.397095 
	C246.646729,401.827087 262.356140,416.899231 260.741913,438.361328 
	C260.417114,442.679688 259.314545,446.860718 257.593536,450.871918 
	C251.424210,465.251038 239.129379,472.833466 224.473129,471.246002 
	C209.611710,469.636261 199.128265,459.392120 196.275574,443.369415 
M212.866791,432.582214 
	C211.057541,441.698425 214.282043,448.083771 222.173141,451.011353 
	C230.855484,454.232483 239.041824,451.972900 242.763184,445.328064 
	C247.287125,437.250214 244.552307,428.269135 236.337952,424.227600 
	C226.317917,419.297668 217.231750,422.271942 212.866791,432.582214 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M404.336121,211.498444 
	C413.807617,198.381638 426.514191,193.015640 441.921967,195.265137 
	C455.961121,197.314819 466.038452,208.404861 468.069855,222.481155 
	C469.988312,235.775314 463.111481,248.516312 450.541016,254.957321 
	C427.833527,266.592468 404.787598,256.079742 400.167389,231.944000 
	C398.785645,224.725830 400.734558,218.110123 404.336121,211.498444 
M436.091736,211.138306 
	C434.927582,211.126556 433.757141,211.030502 432.600342,211.117081 
	C426.289185,211.589432 421.114258,215.352951 419.461304,220.962799 
	C417.277802,228.373001 419.360077,234.800323 424.805420,240.034363 
	C429.128845,244.190002 435.468109,244.787994 441.104126,242.046127 
	C446.330170,239.503693 449.882660,233.474854 449.494141,227.807510 
	C448.889282,218.984238 444.682892,213.438385 436.091736,211.138306 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M810.875000,600.237183 
	C821.348022,617.047241 816.204102,639.941956 799.924438,650.261230 
	C788.822876,657.298096 774.882202,656.708069 763.797119,648.731934 
	C753.955811,641.651062 749.050293,628.199768 752.156189,615.848877 
	C755.821411,601.273743 763.621887,590.196289 779.402588,587.453552 
	C792.121277,585.243042 802.500916,590.108215 810.875000,600.237183 
M770.293945,629.124695 
	C773.325378,632.943481 777.406311,634.961670 782.051514,636.073486 
	C789.766846,637.920044 797.397034,633.528931 799.536377,625.958801 
	C801.576477,618.740112 799.020813,612.330994 792.563293,608.471741 
	C785.337097,604.153076 777.866699,604.404175 772.696472,609.139526 
	C767.143738,614.225159 766.099976,621.355591 770.293945,629.124695 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M821.571899,496.397583 
	C832.402100,491.245422 832.626160,491.320587 835.759460,502.630585 
	C838.109741,511.113678 838.451904,519.718140 836.498352,528.301880 
	C833.618958,540.953735 825.421082,547.993652 812.487488,548.130066 
	C801.013062,548.251099 789.530334,547.477234 778.049438,547.167664 
	C774.912842,547.083069 773.495361,545.712158 773.716736,542.527161 
	C773.889832,540.038086 773.805786,537.532288 773.912659,535.037170 
	C774.047668,531.886719 774.101440,528.611267 779.987000,529.818115 
	C773.714355,521.545166 773.012756,513.370056 774.852478,504.754578 
	C776.631226,496.424408 782.361450,490.098846 789.482056,488.766876 
	C800.759216,486.657410 809.988037,493.885925 811.267151,505.906860 
	C811.794250,510.860657 812.338684,515.793945 811.487366,520.818909 
	C811.055115,523.370483 810.955017,526.103455 811.732422,528.687866 
	C818.019592,528.964111 821.987488,525.045776 822.611450,517.915161 
	C823.116211,512.146790 822.157349,506.585052 819.403320,501.487457 
	C817.978577,498.850281 818.674377,497.469482 821.571899,496.397583 
M787.733826,511.324402 
	C787.409729,512.776855 786.959900,514.214233 786.784668,515.684448 
	C786.201660,520.575256 788.879944,525.994202 792.733276,527.926880 
	C797.155762,530.144958 799.628052,528.738708 799.776184,523.844788 
	C799.871338,520.700256 799.888855,517.550659 799.834290,514.405212 
	C799.779846,511.261292 799.074951,508.303589 795.574524,507.349945 
	C792.334045,506.467072 789.704895,507.560181 787.733826,511.324402 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M759.989990,383.019409 
	C774.138733,377.941803 781.855896,381.010315 788.581421,394.748016 
	C790.769409,399.217163 792.456726,403.941620 794.208557,408.610992 
	C795.663452,412.489044 797.578064,412.086548 799.980103,409.545685 
	C802.635742,406.736542 803.157288,403.432678 802.282959,399.807922 
	C800.753967,393.469513 797.653503,388.036682 792.599182,383.880157 
	C790.259155,381.955841 789.954346,380.236572 792.272034,378.198944 
	C792.521667,377.979462 792.757568,377.742035 792.982727,377.497192 
	C800.295715,369.546448 800.650146,369.553345 807.752441,378.109100 
	C814.210327,385.888580 817.858337,394.919922 819.096558,404.864960 
	C820.477966,415.960693 814.252502,425.477448 802.260742,430.326599 
	C792.236511,434.380127 781.976929,437.848328 771.907593,441.795319 
	C768.528748,443.119781 766.980286,442.059235 766.016663,438.897461 
	C765.338928,436.673798 764.538696,434.461639 763.532166,432.369934 
	C761.964722,429.112640 761.586121,426.326904 766.716309,424.545959 
	C758.219116,420.159271 754.700684,413.147095 752.889282,405.157196 
	C750.977783,396.725525 752.855591,389.315857 759.847046,383.249481 
	C760.045166,382.975006 760.007019,383.002991 759.989990,383.019409 
M767.468750,402.279022 
	C766.783020,410.133087 770.638184,416.634888 776.872437,418.316803 
	C779.335693,418.981384 781.562866,418.432251 783.426086,416.977936 
	C785.399597,415.437561 783.751465,413.589752 783.197937,412.017242 
	C782.100281,408.899139 780.939026,405.771027 779.437866,402.834290 
	C776.534241,397.154327 772.168518,396.749268 767.468750,402.279022 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M270.462585,372.422241 
	C271.061493,365.313690 267.405975,361.108215 261.973816,358.052856 
	C254.140915,353.647217 246.332489,349.190430 238.383240,345.003052 
	C235.171768,343.311371 234.210327,341.646912 236.504913,338.486511 
	C239.124222,334.878845 239.828568,328.807953 243.732040,327.576508 
	C247.716614,326.319519 251.649216,330.913544 255.552185,333.012787 
	C268.157135,339.792450 280.588074,346.899231 293.257996,353.552521 
	C297.282990,355.666168 297.781799,357.737518 295.252319,361.236023 
	C293.995026,362.974945 292.999969,364.948578 292.155090,366.930603 
	C290.700439,370.343048 288.777100,372.327972 284.350342,369.296204 
	C285.366089,376.164337 284.657257,381.967896 281.920654,387.460327 
	C275.019135,401.311798 262.314697,406.689972 248.288391,400.392151 
	C237.237701,395.430389 226.846985,389.001953 216.142426,383.263611 
	C213.625626,381.914490 213.516632,380.186829 214.887024,377.933441 
	C224.159927,362.685516 218.630753,363.771851 234.212784,371.687408 
	C239.848862,374.550507 245.262344,377.849518 250.874557,380.762421 
	C260.814270,385.921539 266.566711,383.520691 270.462585,372.422241 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M696.706055,777.713379 
	C688.091797,784.115295 688.145569,784.073181 681.685059,775.825989 
	C672.245056,763.775208 662.805542,751.721741 653.171936,739.826416 
	C650.569153,736.612549 649.857117,734.328857 653.957397,731.952454 
	C655.951538,730.796814 657.754150,729.230713 659.432800,727.629517 
	C662.074097,725.110046 664.564514,723.670044 667.330994,728.525146 
	C670.108398,719.334045 675.112793,712.984314 682.811523,708.832886 
	C692.566345,703.572754 702.468506,704.256531 710.532654,711.845947 
	C720.383423,721.116821 727.539551,732.707886 736.056091,743.137329 
	C737.700867,745.151489 736.467590,746.435852 734.885315,747.661133 
	C732.255493,749.697815 729.480042,751.591187 727.093140,753.885254 
	C724.164124,756.700317 722.215576,756.162476 719.886108,753.078369 
	C713.970764,745.246887 707.906738,737.521851 701.704346,729.915466 
	C698.612183,726.123291 694.623718,723.676941 689.439270,725.203857 
	C684.015076,726.801392 680.712341,730.596375 679.616821,736.096802 
	C678.766602,740.365845 680.865112,743.918091 683.265564,747.136292 
	C688.139526,753.670715 693.182373,760.080139 698.206848,766.501099 
	C703.033936,772.669617 703.062317,772.647400 696.706055,777.713379 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M475.651001,219.931427 
	C475.385284,209.959030 475.208954,200.465118 474.811432,190.980499 
	C474.657043,187.296967 476.155975,186.045578 479.739166,185.871414 
	C492.634796,185.244614 492.796082,185.136429 493.803589,197.972366 
	C494.337280,204.772110 494.178192,211.626297 494.329773,218.455963 
	C494.533051,227.614944 498.239258,231.861023 506.080414,231.914734 
	C514.316101,231.971161 519.493896,227.152969 519.628784,218.604919 
	C519.775879,209.282028 519.548340,199.945602 519.190918,190.626343 
	C519.057800,187.154266 519.810852,185.491241 523.638550,185.265060 
	C541.859192,184.188416 537.832947,183.970291 538.279846,198.256317 
	C538.727844,212.574142 538.813416,226.903717 539.309509,241.219421 
	C539.464478,245.689850 538.126953,247.809830 533.418213,247.343979 
	C531.109924,247.115601 528.750244,247.244476 526.424927,247.389847 
	C522.918640,247.609024 520.286255,246.895325 520.936096,241.712585 
	C514.403137,246.710068 507.867126,249.371567 500.458191,248.865967 
	C484.262848,247.760773 475.887695,238.071457 475.651001,219.931427 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M635.595642,238.374237 
	C642.593872,245.107254 644.185608,250.695892 641.337158,257.767883 
	C638.143921,265.695923 631.899414,269.228851 623.732239,269.276917 
	C609.080566,269.363068 597.151123,262.916168 586.759644,253.094315 
	C584.264404,250.735855 584.385681,248.555283 587.059814,246.449326 
	C587.449585,246.142395 587.774475,245.753296 588.130981,245.403824 
	C593.998718,239.651108 593.974915,239.678497 599.984009,244.919434 
	C605.074402,249.359055 610.871094,252.499619 617.429382,254.233032 
	C620.114563,254.942764 622.575378,254.725540 623.947998,252.136398 
	C625.472961,249.259674 622.946838,247.836487 621.114441,246.603012 
	C616.150391,243.261459 610.879944,240.361679 606.016785,236.886795 
	C598.383911,231.432938 595.865051,224.810333 598.176453,217.609528 
	C600.851624,209.275131 607.355469,204.791550 616.766968,204.616882 
	C630.018250,204.370987 640.880127,209.922241 650.644470,218.292664 
	C653.127014,220.420761 652.928711,222.113068 650.647156,224.422333 
	C643.781128,231.371841 643.856873,231.468811 636.046631,225.699463 
	C632.112061,222.793015 627.779968,220.674164 623.045471,219.566284 
	C620.607239,218.995728 617.829224,218.909439 616.517822,221.743927 
	C615.141418,224.718918 617.259277,226.396255 619.416016,227.816284 
	C624.695068,231.291992 630.013733,234.707535 635.595642,238.374237 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M806.436523,465.549072 
	C802.077637,466.287231 798.118103,466.813660 794.214783,467.613983 
	C787.639160,468.962158 785.332336,472.910950 788.267273,478.916473 
	C790.047180,482.558655 789.261658,484.095764 785.987122,485.854156 
	C777.352234,490.490997 775.996826,489.994171 773.068909,480.508118 
	C771.619873,475.813599 771.270813,471.021759 771.748718,466.201843 
	C772.634155,457.271271 779.296204,450.972656 789.921509,449.043884 
	C796.790771,447.796906 803.699219,446.739136 810.618164,445.804901 
	C813.381165,445.431824 814.585571,444.310425 813.822449,441.565308 
	C812.480957,436.739563 814.768921,434.891968 819.265503,434.668274 
	C820.415222,434.611084 821.556458,434.279388 822.690125,434.023163 
	C826.144897,433.242188 828.180847,434.307343 828.346741,438.126648 
	C828.504028,441.749786 830.094116,442.802032 833.903137,442.077820 
	C843.773804,440.201202 843.810974,440.409729 845.388916,450.327911 
	C845.492920,450.982208 845.684692,451.622101 845.818665,452.272186 
	C847.095703,458.468445 846.875793,458.789307 840.529602,460.003021 
	C838.576233,460.376678 836.614685,460.712250 834.672241,461.135437 
	C834.052856,461.270355 833.482788,461.631622 832.544983,462.039520 
	C833.055664,465.517029 833.497375,468.948090 834.079956,472.355133 
	C834.526428,474.966553 833.623779,476.538269 830.977600,477.025238 
	C830.814026,477.055298 830.654663,477.114990 830.490356,477.132202 
	C820.731018,478.154663 819.980957,481.385345 818.574463,469.159607 
	C818.072327,464.794556 815.857300,463.524139 811.777161,464.671173 
	C810.190063,465.117432 808.502808,465.207916 806.436523,465.549072 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M314.286346,682.804443 
	C303.327271,692.135620 292.470856,701.172363 281.561615,710.144897 
	C272.049835,717.968079 262.410797,725.638000 252.973785,733.549500 
	C250.055984,735.995667 247.968979,736.323547 245.866104,732.786255 
	C243.602371,728.978394 238.094330,726.268188 238.631393,721.992065 
	C239.128372,718.034973 244.578995,716.160156 247.875839,713.431030 
	C265.055725,699.209595 282.387299,685.171448 299.584869,670.971252 
	C302.370239,668.671326 304.428253,668.572632 306.526794,671.660645 
	C309.030243,675.344421 312.672577,678.206421 314.286346,682.804443 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M786.693909,577.371887 
	C781.393127,576.289856 776.522522,575.203064 771.618896,574.294983 
	C768.243225,573.669800 767.115417,571.757751 767.957092,568.586121 
	C772.202087,552.589844 767.746765,554.170105 784.254517,557.565918 
	C806.063965,562.052185 827.781555,566.984375 849.582397,571.514160 
	C853.443481,572.316406 854.575623,573.864441 853.671204,577.641541 
	C849.862305,593.547974 852.903442,591.168762 837.845276,588.177246 
	C820.891846,584.809143 804.018311,581.038757 786.693909,577.371887 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M288.664185,312.199249 
	C295.174805,320.591736 303.663666,326.333496 311.254120,333.022522 
	C314.670197,336.032898 315.135620,337.800903 311.835602,341.240295 
	C302.743225,350.716614 302.881866,350.868622 292.894562,342.234589 
	C281.814850,332.656158 270.806305,322.994293 259.646973,313.509735 
	C256.892914,311.169006 256.350494,309.284973 259.149353,306.662201 
	C260.837097,305.080688 262.321045,303.226624 263.638092,301.316742 
	C265.950317,297.963745 268.414368,296.123535 272.251312,300.266327 
	C273.390533,293.947479 274.572113,288.321716 278.173645,283.539398 
	C280.108246,280.970490 281.892365,280.456207 284.218262,282.877930 
	C284.907928,283.596008 285.746155,284.170929 286.440002,284.885529 
	C288.515106,287.022522 291.939148,288.253662 292.719666,291.095490 
	C293.538239,294.075989 289.870270,295.604279 288.624329,298.083435 
	C286.289917,302.728333 285.829315,307.251495 288.664185,312.199249 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M202.341614,582.220093 
	C203.662674,581.776917 204.669205,581.591492 205.557159,581.161377 
	C210.027740,578.995728 212.187500,580.091858 213.649307,585.170410 
	C215.968842,593.228699 222.881607,596.536133 231.522659,594.230530 
	C240.035034,591.959290 248.468735,589.361267 256.843048,586.619812 
	C260.268097,585.498535 262.149963,586.047119 263.072052,589.683228 
	C263.887848,592.900208 264.985748,596.050476 266.061737,599.195068 
	C267.018463,601.991089 266.134613,603.508484 263.284729,604.373230 
	C245.943085,609.635315 228.621368,614.963867 211.318115,620.350830 
	C208.725296,621.158081 207.284912,620.707336 206.539322,617.904114 
	C205.394379,613.599365 203.969833,609.368958 202.796524,605.539734 
	C204.037994,603.189819 206.521271,603.801331 207.753525,601.775085 
	C203.730316,599.373962 200.608093,596.040588 198.306534,591.931946 
	C194.590164,585.297668 194.816223,584.649292 202.341614,582.220093 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M560.278076,251.965210 
	C546.120605,249.256454 546.154297,249.263168 548.877136,235.574432 
	C551.599731,221.886505 554.401733,208.211014 556.840271,194.471725 
	C557.699890,189.628677 559.510681,187.651596 564.476990,189.388901 
	C566.329468,190.036957 568.395752,190.160568 570.380981,190.324066 
	C574.162231,190.635544 576.311890,192.219696 575.169434,196.898392 
	C580.510620,195.426910 585.218750,193.315506 590.455750,193.739166 
	C595.837952,194.174622 596.653198,194.978653 595.768677,200.104248 
	C595.570862,201.250961 595.390442,202.400803 595.182678,203.545685 
	C593.829590,211.000702 593.827881,211.000412 586.207764,210.379822 
	C578.975281,209.790771 573.243225,213.523407 571.376648,220.938629 
	C569.068542,230.107635 567.278625,239.412994 565.482300,248.701492 
	C564.906982,251.676239 563.568481,252.752457 560.278076,251.965210 
z"
      />
      <path
        fill="#000000"
        opacity="1.000000"
        stroke="none"
        d="
M540.290161,783.197998 
	C539.386475,775.988647 541.308960,771.852295 546.339294,769.506714 
	C551.158508,767.259460 556.637939,768.263245 559.981995,772.194397 
	C563.024536,775.771240 563.951538,779.896484 562.061279,784.292053 
	C560.095886,788.862366 556.367615,791.157959 551.456360,791.277039 
	C545.980286,791.409851 542.375488,788.625000 540.290161,783.197998 
z"
      />
    </svg>
  );
}
