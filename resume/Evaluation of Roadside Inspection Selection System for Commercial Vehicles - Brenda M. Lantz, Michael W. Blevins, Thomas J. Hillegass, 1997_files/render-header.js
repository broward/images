var docereeBaseUrl = "https://bidder.doceree.com";

(function () {
    if (typeof (hcpContext) != 'undefined') {
        setDocereeContext(hcpContext);
    }
    initializeDocereeCookie();
})();

function initDoceree(callback) {
    let platformUid = getPlatformUid()
    if (platformUid) {
        callback(platformUid);
        return;
    }
    try {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    let responseJson = JSON.parse(xhttp.responseText);
                    if (responseJson && responseJson.platformUid) {
                        let cookieContent = { platformUid: responseJson.platformUid, version: responseJson.version };
                        document.cookie = "_docereeId=" + JSON.stringify(cookieContent) + ';path=/;max-age=' + responseJson.maxAge;
                    }
                    callback(responseJson.platformUid)
                }
            }
        }
        xhttp.withCredentials = true;
        xhttp.crossDomain = true;
        xhttp.open("GET", docereeBaseUrl + "/v1/doceree-init", true);
        xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhttp.send();
    }catch(err) {
        if (err && err.message) {
            let message = 'Error message ' + err.message + ', origin: ' + window.location.origin;
            docereeLogMessage('https://programmatic.doceree.com', message);
        }
    }
}

function initializeDocereeCookie() {
    initDoceree(function(platformUid) {
        let imgElem = document.createElement('img');
        imgElem.onload = function() {
            let imgElem2 = document.createElement('img');
            imgElem2.src = docereeBaseUrl + "/v1/initliveintent?id="+platformUid;    
        }
        imgElem.src = docereeBaseUrl + "/v1/init?id="+platformUid;
    })
}


function setDocereeContext(userObj) {
    var cookieContext = {};

    if (userObj['email'] !== undefined) {
        cookieContext.email = userObj['email'];
    }

    if (userObj['firstName'] !== undefined) {
        cookieContext.firstName = userObj['firstName'];
    }

    if (userObj['lastName'] !== undefined) {
        cookieContext.lastName = userObj['lastName'];
    }

    if (userObj['specialization'] !== undefined) {
        cookieContext.specialization = userObj['specialization'];
    }

    if (userObj['gender'] !== undefined) {
        cookieContext.gender = userObj['gender'];
    }

    if (userObj['city'] !== undefined) {
        cookieContext.city = userObj['city'];
    }

    if (userObj['state'] !== undefined) {
        cookieContext.state = userObj['state'];
    }

    if (userObj['npi'] !== undefined) {
        cookieContext.npi = userObj['npi'];
    }

    if (userObj['zipCode'] !== undefined) {
        cookieContext.zipCode = userObj['zipCode'];
    }

    if (userObj['mciRegistrationNumber'] !== undefined) {
        cookieContext.mciRegistrationNumber = userObj['mciRegistrationNumber'];
    }

    if (userObj['hashedNPI'] !== undefined) {
        cookieContext.hashedNPI = userObj['hashedNPI'];
    }

    if (userObj['hashedEmail'] !== undefined) {
        cookieContext.hashedEmail = userObj['hashedEmail'];
    }

    // set dmdData here

    var encryptedHCP = btoa(encodeURIComponent(JSON.stringify(cookieContext)));
    document.cookie = "_docereeContext=" + encryptedHCP + "; path=/";
}

function removeDocereeContext() {
    document.cookie = '_docereeContext=; Max-Age=-99999999;';
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

function docereeLogMessage(baseUrl, message) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", baseUrl + "/render/logMessage", true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify({
        'message': message
    }));
}

try {
    (function(w,d,s,m,n,t){
        w[m]=w[m]||{init:function(){(w[m].q=w[m].q||[]).push(arguments);},ready:function(c){if('function'!=typeof c){return;}(w[m].c=w[m].c||[]).push(c);c=w[m].c;
        n.onload=n.onreadystatechange=function(){if(!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;
        if(t.parentNode&&n.parentNode){t.parentNode.removeChild(n);}while(c.length){(c.shift())();}}};}},w[m].d=1*new Date();n=d.createElement(s);t=d.getElementsByTagName(s)[0];
        n.async=1;n.src='https://www.medtargetsystem.com/javascript/beacon.js?'+Date.now().toString();n.setAttribute("data-aim",m);t.parentNode.insertBefore(n,t);
    })(window,document,'script','AIM_160');

    AIM_160.init('160-2655-D7D48E5B');

    AIM_160.ready(function () {
        let fetchData = AIM_160.fetch()
        if (fetchData) {
            sendDmdData(fetchData, 'fetch', new Date());
        } 
        AIM_160.ondetect(function (userObj) {
            sendDmdData(userObj, 'ondetect', new Date());
        });
    });
} catch (err) {
    if (err && err.message) {
        let message = 'Error message ' + err.message + ', origin: ' + window.location.origin;
        docereeLogMessage('https://programmatic.doceree.com', message);
    }
}   

function saveDmdInfo(userObj){
    let xhttp = new XMLHttpRequest();
    xhttp.open("POST", docereeBaseUrl + "/v1/saveDMDInfo", true);
    xhttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhttp.send(JSON.stringify({
        'user': userObj,
        'platformUid': getPlatformUid()
    }));
}

function sendDmdData(userObj, operation, aimReadyInvoked) {
    try {
        let aimOnDetectInvoked = new Date();
        if (userObj && JSON.stringify(userObj).length > 5) {
            saveDmdInfo(userObj)
            dispatchUserAvailable(userObj)
            let message = 'Ready invoked at: ' + aimReadyInvoked.toUTCString() + ', ' + operation + ' invoked at: ' + aimOnDetectInvoked.toUTCString()
            + ', payload received: ' + JSON.stringify(userObj) + ', origin: ' + window.location.origin;
            docereeLogMessage('https://programmatic.doceree.com', message);
        }
        let overwrite = true;
        let existingData = getCookie('_docereeDmdContext');
        if (existingData) {
            existingData = JSON.parse(decodeURIComponent(atob(existingData)));
            if (existingData.npi_number && existingData.npi_number.length === 10) {
                overwrite = false;
            }
        }

        if (overwrite) {
            let encryptedHCP = btoa(encodeURIComponent(JSON.stringify(userObj)));
            let date = new Date();
            date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
            document.cookie = "_docereeDmdContext=" + encryptedHCP + "; expires=" + date.toGMTString() + "; path=/";
            if (typeof initDocereeSlotRenderer === "function") {
                initDocereeSlotRenderer();
            }
        }
    } catch (err) {
        if (err && err.message) {
            let message = 'Error message ' + err.message + ', origin: ' + window.location.origin;
            docereeLogMessage('https://programmatic.doceree.com', message);
        }
    }
}

function getPlatformUid() {
    let docereeScriptVersion = '0.1';
    let cookieContent = getCookie('_docereeId');
    if (!!cookieContent) {
        cookieContent = JSON.parse(cookieContent)
        if (cookieContent.version == docereeScriptVersion) {
            return cookieContent.platformUid;
        }
    }
}

function validateHistoryValues(historyValues) {
    var validatedValue = null;
    if (historyValues) {
        if (!Array.isArray(historyValues)) {
            historyValues = [historyValues]
        }
        historyValues.map(d => {
            if(Array.isArray(d.value)) {
                d.value = d.value.join(",")
            }
            try {
                let convertedDate = new Date(d.date);
                if (convertedDate == "Invalid Date") {
                    d.date = false;
                } else {
                    d.date = ("0" + (convertedDate.getMonth()+1)).slice(-2) + "-"+ ("0" + convertedDate.getDate()).slice(-2)+ "-" +convertedDate.getFullYear()
                }
            } catch (err) {
                d.date = false;
            }
        })
        historyValues = historyValues.filter(d => d.value && d.date);
        if(historyValues.length) {
            validatedValue = historyValues;
        }
    }
    return validatedValue;
}

// POC work start here ...
function fireAction(options, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;
    xhttp.crossDomain = true;

    let platformUid = getPlatformUid()
    if(platformUid) {
        options['platformUid'] = platformUid
    }

    if (options.event_type !== 'session_start') {
        options['session_token'] = getCookie('_docereeSession');
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                let res = JSON.parse(xhttp.responseText);
                if (res) {
                    if (res.newPlatformUid) {
                        let cookieContent = { platformUid: res.newPlatformUid, version: res.version };
                        document.cookie = "_docereeId=" + JSON.stringify(cookieContent) + ';path=/;max-age=' + res.maxAge;
                    }
                    var currentSession = getCookie('_docereeSession');
                    if (currentSession != res.session_token ){
                        var d = new Date();
                        d = d.setMinutes(d.getMinutes() + 15);
                        document.cookie = "_docereeSession=" + res.session_token + ';path=/;Expires=' + new Date(d).toUTCString();    
                    }
                }
                if (callback) {
                    callback(getCookie('_docereeSession'))
                }
            } else {
                if (callback) {
                    callback(null)
                }
            }
        }
    }
    var link = docereeBaseUrl + "/v1/savePOCdata"
    xhttp.open("POST", link, true);
    xhttp.send(JSON.stringify(options));
}

function startDocereeSession(callback) {
    fireAction({event_type: "session_start"}, callback);
}

function endDocereeSession(callback) {
    fireAction({event_type: "session_end"}, callback);
}

function setDocereeAttributeAge(age, callback) {
    fireAction({event_type: "capture_data", age: ""+ age}, callback)
}

function setDocereeAttributeGender(gender, callback) {
    fireAction({event_type: "capture_data", gender: gender}, callback)
}

function setDocereeAttributeLabTest(labTests, callback) {
    if (Array.isArray(labTests)) {
        labTests = labTests.join()
    }
    fireAction({event_type: "capture_data", lab_tests: labTests}, callback)
}

function setDocereeAttributeLabTestHistory(labTestsHistory, callback) {
    value = validateHistoryValues(labTestsHistory);
    if(value) {
        fireAction({event_type: "capture_data", "labTests_history": value}, callback)
    } else  if (callback){
        // callback("Not valid params");
        callback(null)
    }
}

function setDocereeAttributeInsurance(insurances, callback) {
    if (Array.isArray(insurances)) {
        insurances = insurances.join()
    }
    fireAction({event_type: "capture_data", insurance: insurances}, callback)
}

function setDocereeAttributeDiagnosis(diagnosis, callback) {
    if (Array.isArray(diagnosis)) {
        diagnosis = diagnosis.join()
    }
    fireAction({event_type: "capture_data", diagnosis: diagnosis}, callback)
}

function setDocereeAttributeDiagnosisHistory(diagnosisHistory, callback) {
    value = validateHistoryValues(diagnosisHistory);
    if(value) {
        fireAction({event_type: "capture_data", "diagnosis_history": value}, callback)
    } else  if (callback){
        // callback("Not valid params");
        callback(null)
    }
}

function setDocereeAttributePrescription(prescription, callback) {
    if (Array.isArray(prescription)) {
        prescription = prescription.join()
    }
    fireAction({event_type: "capture_data", prescription: prescription}, callback)
}

function setDocereeAttributePrescriptionHistory(prescriptionHistory, callback) {
    value = validateHistoryValues(prescriptionHistory);
    if(value) {
        fireAction({event_type: "capture_data", "prescription_history": value}, callback)
    } else  if (callback){
        // callback("Not valid params");
        callback(null)
    }
}

function setDocereeAttributeTemperature(temprature, unit, callback) {
    fireAction({event_type: "capture_data", temperature: temprature+" "+unit}, callback)
}

function setDocereeAttributeBP(bp, unit, callback) {
    fireAction({event_type: "capture_data", bp: bp+" "+unit}, callback)
}

function setDocereeAttributePulse(pulse, unit, callback) {
    fireAction({event_type: "capture_data", pulse: pulse+" "+unit}, callback)
}

function setDocereeAttributeRespiration(respiration, unit, callback) {
    fireAction({event_type: "capture_data", respiration: respiration+" "+unit}, callback)
}
    
function getUserContext() {
    let dmdEncryptedContext = getCookie('_docereeDmdContext');
    if (!!dmdEncryptedContext) {
        try {
            let dmdData = JSON.parse(decodeURIComponent(atob(dmdEncryptedContext)));
            var userInfo = {
                npi: dmdData.npi_number,
                firstName: dmdData.first_name,
                lastName: dmdData.last_name,
                specialization: dmdData.specialty,
            }
            return userInfo;
        } catch (error) {
            return null;
        }
    }
    return null;
}

function dispatchUserAvailable(dmdData){
    var userInfo = {
        npi: dmdData.npi_number,
        firstName: dmdData.first_name,
        lastName: dmdData.last_name,
        specialization: dmdData.specialty,
    }
    document.dispatchEvent(new CustomEvent('docereeUser', { detail: userInfo }))
}

//demo to catch the event
// document.addEventListener("docereeUser", function(user) {
//     console.log('The User is: ' + JSON.stringify(user.detail));
// })