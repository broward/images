<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %>
<%@ page import="java.util.*, com.browardhorne.mememiner.Util" %>
<% String cPath = Util.getContextPath(request); %>

<HTML>
<HEAD>
<TITLE>Meme Theory 101</TITLE>

<c:import url="/meta.jsp"/>

</HEAD>
<BODY>

<c:import url="/navigation.jsp"/>

<div id="content">
	<div id="title">
		<B><a href="<%= cPath %>/theory101/index.jsp">Foundation</a></B>&nbsp;&nbsp;&nbsp;&nbsp;		
			<a href="<%= cPath %>/theory101/impedance.jsp">Impedance</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="<%= cPath %>/theory101/sentiment.jsp">Sentiment</a>&nbsp;&nbsp;&nbsp;&nbsp;
			<a href="<%= cPath %>/theory101/diffraction.jsp">Diffraction</a>
		<HR WIDTH=90% SIZE=3 ALIGN="left">
	</div>
	<br/>
	
	<div id="none">
		<p><b><font color="red">Do not bookmark this link!</font></b><br/>
		This is a work in progress, all links are subject to change.<br/>
		None of this material has been subjected to rigorous statistical scrutiny.</br>
		Correct, alter or extend it for yourself as needed.</br></p>
	</div>
	
	<div id="fulltext">
		The "Meme Theory" pages are a set of concepts designed to <b>understand, predict,<br/>
		and control how memes transmit information</b> through an organization or culture.<br/>
		<br/>
		The memegraphs on this site are a product of theory & concept, not vice versa.
		<br/>
		<br/>
		<br/>
		
		Assumptions:</br></br>
			<li>A human being has <a href="<%= cPath %>/costs">finite bandwidth</a> for I/O.</li></br>
			<li>Ergo, the sum of all individuals is a social network with finite bandwith.</li></br>
			<li>This bandwidth is composed of channels (as an abstract concept), with one channel equal to one meme.</li></br>
			<li>This bandwidth has quality of service, and allocates variable bandwidth to escalated memes as necessary.</li></br>
			<li>Over time, competition for this finite bandwidth creates hardy memes, resistant to displacement.</li></br>
			</br>
			<li>We can determine bandwidth allocation and meme resistance through time-based empirical measurements.</li></br>
		<br/>
	</div>

	<div id="fulltext">
		We need a methodology for collecting feedback about memes & social bandwidth.<br/>
		So define this set of quantitative measurements:
		<br/>
		<ul>
			<li><a href="<%= cPath %>/theory101/impedance.jsp">Impedance</a> - the speed of propagation of a meme.</li><br/>
			<li><a href="<%= cPath %>/theory101/sentiment.jsp">Sentiment</a> - how a meme affects the population.</li><br/>
			<li><a href="<%= cPath %>/theory101/diffraction.jsp">Diffraction</a> - how well a meme spawns derivative memes.</li><br/>
		</ul>
	</div>
</div>

</BODY>
</HTML>
