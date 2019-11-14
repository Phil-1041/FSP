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
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[owner_id]', this.state.owner_id);

    if(this.state.videoFile) {
      formData.append('video[video]', this.state.videoFile);
    }

    this.props.uploadVideo(formData)
      .then((video)=> this.props.history.push(`/video/${video.id}`))
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
    const preview = this.state.videoUrl ? <video src={this.state.videoUrl}></video> : null;
    return (
      <div id="upload-form">
        <h3>Video Preview</h3>
        {preview}
        <br/>
        <video src=""></video>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="video-title">Title</label>
          <input type="text" value={this.state.title} id="video-title" 
            onChange={this.handleInput('title')}/>

          <label htmlFor="video-desc">Description</label>
          <input type="text" value={this.state.description} id="video-desc" 
            onChange={this.handleInput('description')}/>

          <label htmlFor="video-priv">Privacy</label>
          <input type="text" value={this.state.privacy} id="video-priv" 
            onChange={this.handleInput('privacy')}/>

          <input type="file"
            onChange={this.handleFile.bind(this)}
          />
          
          <input type="submit" value="Upload Video"/>
        </form>
      </div>
    )
  }
}

export default videoUpload;