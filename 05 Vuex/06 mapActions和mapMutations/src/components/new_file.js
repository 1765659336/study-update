//未生成质检记录不能审批通过add by fc 2019/11/18
var qia_record_result_ds = $('qia1010_ins_record_ds');
var qia_record = qia_record_result_ds.getCurrentRecord();
if (qia_record == null) {
	Aurora.showMessage('${l:HAP_PROMPT}', '${l:PROMPTS.NOT_CREATE_QIA_RECORD_YET}');
	return;
}
var approve_mes_flag = 'N';
//判断是否委外采购订单，如果是则判断是否创建任务单,如果沒有創建則提示，数据传到MES系统，否则直接审批通过。
var lines_ds = $('qia1010_approval_lines_ds');
var line_record = lines_ds.getAll();
for (i = 0; i < line_record.length; i++) {
	if (line_record[i].get('type_lookup_code') == 'Z004' && line_record[i].get('date_flag') == 'Y' && line_record[i]
		.get('approve_flag') == 'N') {
		if (line_record[i].get('assignment_count') == 0) {
			Aurora.showMessage('${l:HAP_PROMPT}', '${l:任务单未创建，请供应商先在移动端完成委外任务单创建和生产投料信息录入！}');
			return;
		} else if (line_record[i].get('assignment_count') != line_record[i].get('assignment_finish_count')) {
			Aurora.showMessage('${l:HAP_PROMPT}', '${l:生产任务单没有完成、请供应商完成生产任务单投料信息的扫码录入}');
			return;
		} else if (line_record[i].get('assignment_count') == line_record[i].get('assignment_finish_count') &&
			line_record[i].get('assignment_count') > 0) {
			approve_mes_flag = 'Y';
		} else {
			approve_mes_flag = 'N';
		}
	}
}
