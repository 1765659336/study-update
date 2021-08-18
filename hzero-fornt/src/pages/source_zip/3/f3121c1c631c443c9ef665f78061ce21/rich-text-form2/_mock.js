const submitData = (req, res) => {
  // 需要处理新建的情况
  const params = req.query;
  const { ticketNumber } = params;
  res.send(
    req.body.map((v) => ({
      ticketNumber,
      serialNumber: `${Math.floor(Math.random() * 100000)}`,
      operator: '张三',
      createTime: '2020-11-09',
      startTime: '2020-11-09',
      endTime: '2020-11-09',
      ...v,
    }))
  );
};

const upLoadData = (_req, res) => {
  // 需要处理新建的情况
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Expose-Headers', '*');
  res.header('Access-Control-Max-Age', '86400');
  res.header('Access-Control-Allow-Methods', 'POST');
  setTimeout(() => {
    res.send({
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    });
  }, 3000);
};

export default {
  'POST /_api/rich-text-form/submit': submitData,
  'POST /_api/rich-text-form/upload': upLoadData,
};
