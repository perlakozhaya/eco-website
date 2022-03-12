var country_list = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua & Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bonaire',
    'Bosnia & Herzegovina',
    'Botswana',
    'Brazil',
    'British Indian Ocean Ter',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Canary Islands',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Channel Islands',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos Island',
    'Colombia',
    'Comoros',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote DIvoire',
    'Croatia',
    'Cuba',
    'Curacao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Ter',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Great Britain',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guinea',
    'Guyana',
    'Haiti',
    'Hawaii',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'Indonesia',
    'India',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea North',
    'Korea South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malaysia',
    'Malawi',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Midway Islands',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Nambia',
    'Nauru',
    'Nepal',
    'Netherland Antilles',
    'Netherlands (Holland, Europe)',
    'Nevis',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau Island',
    'Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Island',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of Montenegro',
    'Republic of Serbia',
    'Reunion',
    'Romania',
    'Russia',
    'Rwanda',
    'St Barthelemy',
    'St Eustatius',
    'St Helena',
    'St Kitts-Nevis',
    'St Lucia',
    'St Maarten',
    'St Pierre & Miquelon',
    'St Vincent & Grenadines',
    'Saipan',
    'Samoa',
    'Samoa American',
    'San Marino',
    'Sao Tome & Principe',
    'Saudi Arabia',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tahiti',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad & Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks & Caicos Is',
    'Tuvalu',
    'Uganda',
    'United Kingdom',
    'Ukraine',
    'United Arab Emirates',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City State',
    'Venezuela',
    'Vietnam',
    'Virgin Islands (Brit)',
    'Virgin Islands (USA)',
    'Wake Island',
    'Wallis & Futana Is',
    'Yemen',
    'Zaire',
    'Zambia',
    'Zimbabwe'    
];

// $(document).ready(function(){
    // var countries = $("#countries");
// });

window.onload = init();

function init(){
    // Get current page name
    var page_name = window.location.pathname;
    
    // Using substring and lastIndexOf, we can get only the page name without the full url
    page_name = page_name.substring(page_name.lastIndexOf("/") + 1, page_name.length);

    console.log("JS Started on " + page_name);

    // Add header and footer to pages
    add_header(page_name);
    add_footer(page_name);

    if(document.getElementById("countries"))
    {
        fill_countries_options();
    }
    
}

function fill_countries_options(){
    country_datalist = document.getElementById("countries");
    var country_options = "";
    for (var i = 0; i < country_list.length; i++) {
        country_options += "<option value='" + country_list[i] + "' />";
    }
    country_datalist.innerHTML = country_options;  
}

function add_header(page_name){
    transparent_class = "";
    if(page_name == "home.html"){
        transparent_class = "transparent-nav";
    }
    
    html = '';
    html += '<nav class="navbar navbar-expand-md ' + transparent_class + '">';
    html += '<div class="container">';
    html += '<a href="home.html">';
    html += '<img class="navbar-brand navbar-text" src="images/logo.png" width="72px" height="auto">';
    html += '</a>';
    html += '<button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">';
    html += '<span class="navbar-toggler-icon"></span>';
    html += '</button>';
    html += '<div class="collapse navbar-collapse" id="collapsibleNavbar">';
    html += '<ul class="navbar-nav ms-auto">';
    html += '<li class="nav-item"><a class="nav-link" href="home.html">Home</a></li>';
    html += '<li class="nav-item"><a class="nav-link" href="contact-us.html">Contact</a></li>';
    html += '</ul>';
    html += '</div>';
    html += '</div>';
    html += '</nav>';
    header_div = document.getElementById("header-div");
    header_div.innerHTML = html;
}

function add_footer(page_name){
    html = "<div class='container-fluid'><div class='row'><div class='col text-center'>All rights reserved</div></div></div>";
    footer_div = document.getElementById("footer-div");
    footer_div.innerHTML = html;
}

function submit_inquiry_form(){
    var fullName = document.getElementsByName("fullName")[0].value;
    var emailAddress = document.getElementsByName("emailAddress")[0].value;
    var phoneNumber = document.getElementsByName("phoneNumber")[0].value;
    var text = "Dear " + fullName + ", we will call you back on " + phoneNumber + " and will send you an email on " + emailAddress;
    alert(text);
}

function submit_contact_us_form(){
    var fullName = document.getElementsByName("fullName")[0].value;
    var emailAddress = document.getElementsByName("emailAddress")[0].value;
    var phoneNumber = document.getElementsByName("phoneNumber")[0].value;
    var text = "Dear " + fullName + ", your message has been received. We will contact you back on " + phoneNumber + " and will send you a confirmation email on " + emailAddress;
    alert(text);
}