$(document).ready(function () {
    // Date Range Picker
        //$('.daterange').daterangepicker({
        //    timePicker: true,
        //    timePickerIncrement: 30,
        //    format: 'YYYY/MM/DD'
        //});

    if ($.isFunction($.fn.daterangepicker)) {
        $(".daterange").each(function (i, el) {
            // Change the range as you desire
            var ranges = {
                '今天': [moment(), moment()],
                '昨天': [moment().subtract('days', 1), moment().subtract('days', 1)],
                '最近7天': [moment().subtract('days', 6), moment()],
                '最近30天': [moment().subtract('days', 29), moment()],
                '本月': [moment().startOf('month'), moment().endOf('month')],
                '上月': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
            };
           
            var $this = $(el),
                opts = {
                    format: attrDefault($this, 'format', 'YYYY/MM/DD'),
                    timePicker: attrDefault($this, 'timePicker', false),
                    timePickerIncrement: attrDefault($this, 'timePickerIncrement', false),
                    separator: attrDefault($this, 'separator', '-'),
                },
                min_date = attrDefault($this, 'minDate', ''),
                max_date = attrDefault($this, 'maxDate', ''),
                start_date = attrDefault($this, 'startDate', ''),
                end_date = attrDefault($this, 'endDate', '');
            
            if ($this.hasClass('add-ranges')) {
                opts['ranges'] = ranges;
            }

            if (min_date.length) {
                opts['minDate'] = min_date;
            }

            if (max_date.length) {
                opts['maxDate'] = max_date;
            }

            if (start_date.length) {
                opts['startDate'] = start_date;
            }

            if (end_date.length) {
                opts['endDate'] = end_date;
            }
            

            $this.daterangepicker(opts, function (start, end) {
                var drp = $this.data('daterangepicker');

                if ($this.is('[data-callback]')) {
                    //daterange_callback(start, end);
                    callback_test(start, end);
                }

                if ($this.hasClass('daterange-inline')) {
                    $this.find('span').html(start.format(drp.format) + drp.separator + end.format(drp.format));
                }
            });
        });
    }

    // Datepicker
    if ($.isFunction($.fn.datepicker)) {
        $(".datepicker").each(function (i, el) {
            var $this = $(el),
                opts = {
                    format: attrDefault($this, 'format', 'yyyy-mm-dd'),
                    //startDate: attrDefault($this, 'startDate', ''),
                    //endDate: attrDefault($this, 'endDate', ''),
                    daysOfWeekDisabled: attrDefault($this, 'disabledDays', ''),
                    startView: attrDefault($this, 'startView', 0),
                    rtl: rtl()
                },
                $n = $this.next(),
                $p = $this.prev();

            $this.datepicker(opts);

            if ($n.is('.input-group-addon') && $n.has('a')) {
                $n.on('click', function (ev) {
                    ev.preventDefault();

                    $this.datepicker('show');
                });
            }

            if ($p.is('.input-group-addon') && $p.has('a')) {
                $p.on('click', function (ev) {
                    ev.preventDefault();

                    $this.datepicker('show');
                });
            }
        });
    }




    // Timepicker
    if ($.isFunction($.fn.timepicker)) {
        $(".timepicker").each(function (i, el) {
            var $this = $(el),
                opts = {
                    template: attrDefault($this, 'template', false),
                    showSeconds: attrDefault($this, 'showSeconds', false),
                    defaultTime: attrDefault($this, 'defaultTime', 'current'),
                    showMeridian: attrDefault($this, 'showMeridian', true),
                    minuteStep: attrDefault($this, 'minuteStep', 15),
                    secondStep: attrDefault($this, 'secondStep', 15)
                },
                $n = $this.next(),
                $p = $this.prev();

            $this.timepicker(opts);

            if ($n.is('.input-group-addon') && $n.has('a')) {
                $n.on('click', function (ev) {
                    ev.preventDefault();

                    $this.timepicker('showWidget');
                });
            }

            if ($p.is('.input-group-addon') && $p.has('a')) {
                $p.on('click', function (ev) {
                    ev.preventDefault();

                    $this.timepicker('showWidget');
                });
            }
        });
    }

});

function attrDefault($el, data_var, default_val) {
    if (typeof $el.data(data_var) != 'undefined') {
        return $el.data(data_var);
    }

    return default_val;
}