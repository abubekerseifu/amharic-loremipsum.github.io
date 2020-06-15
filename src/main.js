import React, { Component } from 'react'
class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      length: 1,
      type: '1',
      lorem: 'Lorem ipsum dolor sit emet',
    }

    this.letters =
      'ሀሁሂሃሄህሆለሉሊላሌልሎሐሑሒሓሔሕሖመሙሚማሜምሞሠሡሢሣሤሥሦረሩሪራሬርሮሰሱሲሳሴስሶሸሹሺሻሼሽሾቀቁቂቃቄቅቆቇበቡቢባቤብቦቨቩቪቫቬቭቮተቱቲታቴትቶቸቹቺቻቼችቾነኑኒናኔንኖኘኙኚኛኜኝኞአኡኢኣኤእኦከኩኪካኬክኮኰኲኳኴኵኸኹኺኻኼኽኾወዉዊዋዌውዎዏዐዑዒዓዔዕዖዘዙዚዛዜዝዞዟዠዡዢዣዤዥዦየዩዪያዬይዮዯደዱዲዳዴድዶዷዸዹዺዻዼዽዾዿጀጁጂጃጄጅጆጇገጉጊጋጌግጎጏጐጒጓጔጕጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯጰጱጲጳጴጵጶጷጸጹጺጻጼጽጾፀፁፂፃፄፅፆፇፈፉፊፋፌፍፎፐፑፒፓፔፕፖፗፘ'
    this.letterLen = this.letters.length
  }
  typechange = (e) => {
    this.setState({ type: e.target.value })
  }
  lengthchange = (e) => {
    this.setState({ length: e.target.value })
  }
  generate = () => {
    var res = ''
    if (this.state.type === '1') {
      res = this.generateWord(this.state.length)
    } else if (this.state.type === '2') {
      res = this.generateSentence(this.state.length)
    } else if (this.state.type === '3') {
      res = this.generateParagraph(this.state.length)
    }
    res = 'ሎሬም ኢፕሰም ዶሎር ሲት ኣሜት ' + res
    this.setState({ lorem: res })
  }
  generateSentence = (len) => {
    var sentences = ''
    for (let i = 0; i < len; i++) {
      var wordLen = 3 + Math.random() * 10
      sentences += this.generateWord(wordLen) + '። &nbsp;&nbsp;&nbsp;'
    }
    return sentences
  }
  generateParagraph = (len) => {
    var paragraphs = ''
    for (let i = 0; i < len; i++) {
      var wordLen = 3 + Math.random() * 10
      paragraphs += '<p>' + this.generateSentence(wordLen) + '</p>'
    }
    return paragraphs
  }

  generateWord = (len) => {
    var temp = ''
    for (let i = 0; i < len; i++) {
      var len2 = 2 + Math.random() * 3
      var word = ''
      for (let j = 0; j < len2; j++) {
        word += this.letters.substr(Math.random() * this.letterLen, 1)
      }
      temp += '&nbsp;' + word
    }
    return temp
  }
  rawMarkup = () => {
    var rawMarkup = this.state.lorem
    return { __html: rawMarkup }
  }
  componentDidMount() {
    this.generate()
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4 card mt-1">
          <div>
            <div>
              <p>
                ሎሬም ኢፕሰም አቀማመጦችን እና የእይታ መሳቂያዎችን ቅድመ ዕይታ ለመመልከት በግራፊክ ፣ በሕትመት እና
                በሕትመት ኢንዱስትሪዎች ውስጥ በብዛት ጥቅም ላይ የሚውለው የቦታ ያዥ ጽሑፍ ነው ፡፡
              </p>
            </div>
            <div className="card-body">
              <div className="form-group row">
                <label className="form-label col-sm-3">Length</label>
                <input
                  min="1"
                  type="number"
                  className="form-control col-sm-9"
                  onChange={this.lengthchange}
                  value={this.state.length}
                />
              </div>

              <div className="form-group row">
                <label className="form-label col-sm-3">Type</label>
                <select
                  className="form-control col-sm-9"
                  onChange={this.typechange}
                >
                  <option value="1">Word</option>
                  <option value="2">Sentence</option>
                  <option value="3">Paragraph</option>
                </select>
              </div>

              <button
                className="btn btn-success float-right btn-flat btn-lg mb-1"
                onClick={this.generate}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-8 card mt-1">
        <div>
    <button  className="copy float-right mr-3 btn btn-outline-primary btn-sm mt-2" data-clipboard-target="#content">copy</button>
    <span>
    
    </span>
  </div>
          <div id="content"
            className="card-body"
            dangerouslySetInnerHTML={this.rawMarkup()}
          ></div>
        </div>
      </div>
    )
  }
}
export default Main
