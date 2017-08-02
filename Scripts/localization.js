var localization = (function () {
    var _data = [];
    var _getLanguage = function () {
        var getCookieValue = function (cookieName) {
            var value = document.cookie;
            var cookieStartAt = value.indexOf(" " + cookieName + "=");
            if (cookieStartAt == -1) {
                cookieStartAt = value.indexOf(cookieName + "=");
            }
            if (cookieStartAt == -1) {
                value = null;
            } else {
                cookieStartAt = value.indexOf("=", cookieStartAt) + 1;
                var cookieEndAt = value.indexOf(";", cookieStartAt);
                if (cookieEndAt == -1) {
                    cookieEndAt = value.length;
                }
                value = unescape(value.substring(cookieStartAt, cookieEndAt));
            }
            return value;
        }

        var language = getCookieValue("ZMZ.Localization");
        if (!language) {
            language = _data[0].language;
        }
        return language;
    };
    

    return {
        text: function (resourceName) {
            var language = _getLanguage();
            for (var i = 0; i < _data.length; i++) {
                if (_data[i].language == language) {
                    for (var j = 0; j < _data[i].localeStringResource.length; j++) {
                        if (_data[i].localeStringResource[j].resourceName == resourceName) {
                            return _data[i].localeStringResource[j].resourceValue;
                        }
                    }
                }
            }

            return resourceName;
        },
        getData: function () { return _data; },
    }
})();

String.prototype.toLocal = function () {
    return localization.text(this);
}

//zh-cn
localization.getData().push({
    language: "635b2742-5388-43ad-9368-a33a01752ce4", localeStringResource: [
        {
            resourceName: "alert",
            resourceValue: "关闭"
        },
        {
            resourceName: "confirm.ok",
            resourceValue: "确定"
        },
        {
            resourceName: "confirm.cancel",
            resourceValue: "取消"
        }
    ]
});

//zh-tw
localization.getData().push({
    language: "2d37910e-9727-4827-90e8-a33e0005fbf6", localeStringResource: [
        {
            resourceName: "alert",
            resourceValue: "關閉"
        },
        {
            resourceName: "confirm.ok",
            resourceValue: "確定"
        },
        {
            resourceName: "confirm.cancel",
            resourceValue: "取消"
        }
    ]
});

//en-us
localization.getData().push({
    language: "f86cef1a-fa11-4af5-a6a3-a33e0005ed9c", localeStringResource: [
        {
            resourceName: "alert",
            resourceValue: "close"
        },
        {
            resourceName: "confirm.ok",
            resourceValue: "ok"
        },
        {
            resourceName: "confirm.cancel",
            resourceValue: "cancel"
        }
    ]
});



