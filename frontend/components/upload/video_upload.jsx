import React from 'react';

class videoUpload extends React.Component {
  constructor(props){
    // debugger
    super(props)
    this.state = {
      title: '',
      description: '',
      privacy: '',
      tags: '',
      language: '',
      content_rate: '',
      owner_id: this.props.session.id,
      videoFile: null,
      videoUrl: null
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    //makes modal come up 
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[owner_id]', this.state.owner_id);

    if(this.state.videoFile) {
      formData.append('video[video]', this.state.videoFile);
    }

    this.props.uploadVideo(formData)
      .then(action => {
        let video = Object.values(action.video)[0]
        this.props.history.push(`/video/${video.id}`)
        // this.props.close
      })
      .fail(errors => console.log(errors))
  }

  handleFile(e){
    const file = e.currentTarget.files[0];
    // debugger
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({videoFile: file, videoUrl: reader.result})
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    if(this.state.videoUrl) {
      document.getElementById('preview').src = this.state.videoUrl
    }
    // const preview = this.state.videoUrl ? <video id="preview" src={this.state.videoUrl}></video> : null;
    return (
      <div id="upload-page">

        <div id="upload-form">
          <video id= "preview" src=""></video>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor="video-title">Title</label>
            <input type="text" value={this.state.title} id="video-title" 
              onChange={this.handleInput('title')}/>

            <label htmlFor="video-desc">Description</label>
            <textarea id="video-desc" value={this.state.description}
              cols="60" rows="5" onChange={this.handleInput('description')}></textarea>

            <label htmlFor="video-priv">Privacy</label>
            <input type="text" value={this.state.privacy} id="video-priv" 
              onChange={this.handleInput('privacy')}/>

            <label className="fileContainer">
              Choose a file
              <input className="inputfile" type="file"
                onChange={this.handleFile.bind(this)}
                />
            </label>
            
            <input id="upload-video-button" type="submit" value="Upload Video"/>
          </form>
        </div>

      </div>
    )
  }
}

export default videoUpload;