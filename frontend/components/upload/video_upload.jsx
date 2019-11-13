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
      videoFile: null
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
    formData.append('video[video]', this.state.videoFile);

    this.props.uploadVideo(formData)
      .then((video)=> this.props.history.push(`/benches/${video.id}`))
      .fail(errors => console.log(errors))
  }

  handleFile(e){
    this.setState({videoFile: e.currentTarget.files[0]})
  }

  render(){
    return (
      <div id="upload-form">
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